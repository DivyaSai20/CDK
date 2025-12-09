aws dynamodb create-table \
  --table-name Users \
  --attribute-definitions AttributeName=UserID,AttributeType=N \
  --key-schema AttributeName=UserID,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5


aws dynamodb list-tables


aws dynamodb put-item \
  --table-name Users \
  --item '{"UserID":{"N":"101"}, "Name":{"S":"John"}, "Email":{"S":"john@example.com"}}'


aws dynamodb get-item \
  --table-name Users \
  --key '{"UserID":{"N":"101"}}'

aws dynamodb delete-table --table-name Users
