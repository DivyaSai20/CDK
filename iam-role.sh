Json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": { "Service": "ec2.amazonaws.com" },
      "Action": "sts:AssumeRole"
    }
  ]
}
//code
aws iam create-role \
  --role-name EC2AccessRole \
  --assume-role-policy-document file:///home/ec2-user/Roles/trust-policy.json

