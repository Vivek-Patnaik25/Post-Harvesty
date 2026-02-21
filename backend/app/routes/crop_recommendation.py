from fastapi import APIRouter, HTTPException
import logging

from app.schemas.requests import CropRecommendationRequest
from app.schemas.responses import CropRecommendationResponse
from app.services.crop_recommendation_service import recommend_crop_ml_from_loaded_model

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post("/crop-recommendation", response_model=CropRecommendationResponse)
def get_crop_recommendation(request: CropRecommendationRequest):
    """
    Recommends a crop based on soil type, previous crop grown, and state.
    """
    try:
        return recommend_crop_ml_from_loaded_model(request)
    except ValueError as e:
        logger.error(f"Validation Error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Internal Error: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error during crop recommendation.")
