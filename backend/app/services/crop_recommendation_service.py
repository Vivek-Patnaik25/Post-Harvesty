import pandas as pd
import logging
from app.main import models
from app.schemas.requests import CropRecommendationRequest
from app.schemas.responses import CropRecommendationResponse

logger = logging.getLogger(__name__)

# Dummy/Static dictionaries for crop details (you can expand this or load from CSV)
water_requirement = {
    "Rice": "High", "Wheat": "Medium", "Cotton": "Medium", "Sugarcane": "Very High",
    "Maize": "Medium", "Potato": "Medium", "Soybean": "Medium", "Mustard": "Low",
    "Groundnut": "Medium", "Chickpea": "Low", "Pigeon Pea": "Low", "Black Gram": "Low",
    "Green Gram": "Low", "Lentil": "Low", "Sunflower": "Medium", "Cowpea": "Low"
}

growth_cycle = {
    "Rice": "120-150 days", "Wheat": "120-150 days", "Cotton": "150-180 days", "Sugarcane": "Very Long",
    "Maize": "90-120 days", "Potato": "90-120 days", "Soybean": "90-120 days", "Mustard": "100-120 days",
    "Groundnut": "100-120 days", "Chickpea": "90-120 days", "Pigeon Pea": "150-180 days", "Black Gram": "70-90 days",
    "Green Gram": "60-80 days", "Lentil": "110-130 days", "Sunflower": "90-100 days", "Cowpea": "70-90 days"
}

sustainability_impact = {
    "Rice": "High Water Footprint", "Wheat": "Moderate", "Cotton": "High", "Sugarcane": "High",
    "Maize": "Moderate", "Potato": "Moderate", "Soybean": "Soil Enrichening (Legume)", "Mustard": "Low Water Footprint",
    "Groundnut": "Soil Enrichening (Legume)", "Chickpea": "Soil Enrichening (Legume)", "Pigeon Pea": "Soil Enrichening (Legume)", "Black Gram": "Soil Enrichening (Legume)",
    "Green Gram": "Soil Enrichening (Legume)", "Lentil": "Soil Enrichening (Legume)", "Sunflower": "Low Water Footprint", "Cowpea": "Soil Enrichening (Legume)"
}

def recommend_crop_ml_from_loaded_model(request: CropRecommendationRequest) -> CropRecommendationResponse:
    try:
        loaded_model = models.get('crop_rec_model')
        loaded_feature_columns = models.get('crop_rec_feature_columns')

        if loaded_model is None or loaded_feature_columns is None:
            raise ValueError("Crop Recommendation model is not loaded correctly.")

        # Create a DataFrame from the input arguments
        input_data = pd.DataFrame([[request.soil_type, request.previous_crop, request.state]],
                                  columns=['Soil_Type', 'Previous_Crop', 'State'])

        # Apply one-hot encoding to the input, ensuring columns match loaded_feature_columns
        input_encoded = pd.get_dummies(input_data, columns=['Soil_Type', 'Previous_Crop', 'State'])

        # Reindex to match the training data's columns and fill missing with 0
        input_encoded = input_encoded.reindex(columns=loaded_feature_columns, fill_value=0)

        # Predict the recommended crop using the loaded ML model
        predicted_crop = loaded_model.predict(input_encoded)[0]

        rec_water_requirement = water_requirement.get(predicted_crop, "N/A")
        rec_growth_cycle = growth_cycle.get(predicted_crop, "N/A")
        rec_sustainability_impact = sustainability_impact.get(predicted_crop, "N/A")

        return CropRecommendationResponse(
            recommended_crop=predicted_crop,
            water_requirement=rec_water_requirement,
            growth_cycle=rec_growth_cycle,
            sustainability_impact=rec_sustainability_impact
        )

    except Exception as e:
        logger.error(f"Error during crop recommendation prediction: {e}")
        raise ValueError(f"Failed to generate crop recommendation: {str(e)}")
