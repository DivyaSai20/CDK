aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --count 1 \
  --instance-type t2.micro \
  --key-name MyKeyPair \
  --security-groups MySecurityGroup

aws ec2 describe-instances
aws ec2 start-instances --instance-ids <instance-id>
aws ec2 stop-instances --instance-ids <instance-id>
aws ec2 terminate-instances --instance-ids <instance-id>
