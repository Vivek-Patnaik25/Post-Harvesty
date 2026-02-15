# Post-Harvesty

A machine learning project for agricultural price forecasting using historical price data.

## Project Structure

```
.
├── dataset/
│   └── Agriculture_price_dataset.csv    # Historical agriculture price data
├── notebooks/
│   └── HACK16Price_forecast.ipynb       # Price forecasting analysis and models
└── .gitignore                            # Git ignore file
```

## Overview

This project focuses on predicting agricultural prices using historical price data. The analysis and modeling work is contained in Jupyter notebooks for interactive exploration and visualization.

## Getting Started

### Prerequisites

- Python 3.7+
- Jupyter Notebook or JupyterLab
- pandas
- numpy
- scikit-learn
- matplotlib/seaborn (for visualization)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vivek-Patnaik25/Post-Harvesty.git
cd Post-Harvesty
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install required packages:
```bash
pip install -r requirements.txt
```

### Usage

1. Navigate to the notebooks directory:
```bash
cd notebooks
```

2. Launch Jupyter:
```bash
jupyter notebook
```

3. Open `HACK16Price_forecast.ipynb` to explore the analysis and run the forecasting models.

## Data

The `Agriculture_price_dataset.csv` contains historical agricultural price data used for analysis and model training.

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Contact

For questions or inquiries, please contact the project maintainers.
