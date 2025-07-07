rem Users テーブル
aws dynamodb create-table ^
    --table-name garden-app-dev-users ^
    --attribute-definitions ^
        AttributeName=userId,AttributeType=S ^
    --key-schema ^
        AttributeName=userId,KeyType=HASH ^
    --billing-mode PAY_PER_REQUEST

rem Areas テーブル
aws dynamodb create-table ^
  --table-name garden-app-dev-areas ^
  --attribute-definitions ^
    AttributeName=areaId,AttributeType=S ^
    AttributeName=userId,AttributeType=S ^
  --key-schema ^
    AttributeName=areaId,KeyType=HASH ^
  --global-secondary-indexes ^
    IndexName=UserIdIndex,KeySchema=[{AttributeName=userId,KeyType=HASH}],Projection={ProjectionType=ALL} ^
  --billing-mode PAY_PER_REQUEST

rem Plots テーブル
aws dynamodb create-table ^
  --table-name garden-app-dev-plots ^
  --attribute-definitions ^
    AttributeName=plotId,AttributeType=S ^
    AttributeName=userId,AttributeType=S ^
    AttributeName=areaId,AttributeType=S ^
  --key-schema ^
    AttributeName=plotId,KeyType=HASH ^
  --global-secondary-indexes ^
    IndexName=UserIdIndex,KeySchema=[{AttributeName=userId,KeyType=HASH}],Projection={ProjectionType=ALL} ^
    IndexName=AreaIdIndex,KeySchema=[{AttributeName=areaId,KeyType=HASH}],Projection={ProjectionType=ALL} ^
  --billing-mode PAY_PER_REQUEST

rem Gardens テーブル
aws dynamodb create-table ^
  --table-name garden-app-dev-gardens ^
  --attribute-definitions ^
    AttributeName=gardenId,AttributeType=S ^
    AttributeName=userId,AttributeType=S ^
    AttributeName=plotId,AttributeType=S ^
  --key-schema ^
    AttributeName=gardenId,KeyType=HASH ^
  --global-secondary-indexes ^
    IndexName=UserIdIndex,KeySchema=[{AttributeName=userId,KeyType=HASH}],Projection={ProjectionType=ALL} ^
    IndexName=PlotIdIndex,KeySchema=[{AttributeName=plotId,KeyType=HASH}],Projection={ProjectionType=ALL} ^
  --billing-mode PAY_PER_REQUEST

rem WorkLogs テーブル
aws dynamodb create-table ^
  --table-name garden-app-dev-work-logs ^
  --attribute-definitions ^
    AttributeName=logId,AttributeType=S ^
    AttributeName=userId,AttributeType=S ^
    AttributeName=date,AttributeType=S ^
    AttributeName=gardenId,AttributeType=S ^
  --key-schema ^
    AttributeName=logId,KeyType=HASH ^
  --global-secondary-indexes ^
    IndexName=UserDateIndex,KeySchema=[{AttributeName=userId,KeyType=HASH},{AttributeName=date,KeyType=RANGE}],Projection={ProjectionType=ALL} ^
    IndexName=GardenDateIndex,KeySchema=[{AttributeName=gardenId,KeyType=HASH},{AttributeName=date,KeyType=RANGE}],Projection={ProjectionType=ALL} ^
  --billing-mode PAY_PER_REQUEST

rem PlantCategories テーブル
aws dynamodb create-table ^
  --table-name garden-app-dev-plant-categories ^
  --attribute-definitions ^
    AttributeName=categoryId,AttributeType=S ^
  --key-schema ^
    AttributeName=categoryId,KeyType=HASH ^
  --billing-mode PAY_PER_REQUEST