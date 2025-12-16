// config/variables.ts

export const variables = {
  env: {
    account: '682033498567',
    region: 'ap-south-1'
  },

  vpc: {
    cidr: '10.0.0.0/16',
    maxAzs: 2
  },

  ec2: {
    instanceName: 'var-ec2',
    instanceType: 't3.micro',
    keyName: 'keydiv'
  },

  s3: {
    bucketName: 'variable-s3-bucket-1216'
  }
};
