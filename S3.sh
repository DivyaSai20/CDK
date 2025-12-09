aws s3 mb s3://mybucket-window-1210
aws s3 ls
aws s3 cp file.txt s3://my-demo-bucket-1234/
aws s3 cp s3://my-demo-bucket-1234/file.txt .
aws s3 sync ./local-folder s3://my-demo-bucket-1234/
