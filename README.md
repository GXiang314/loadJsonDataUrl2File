#support json dataUrl to file

env: 
```node: 18.1.0```

sample.json
```
[
  {
    "resource_name": "226c9208-c966-4e57-a414-aa1581929ac1",
    "resource_content": "...base64",
    "media_type": "image/jpeg",
    "extension": "jpeg",
  },
  ...
]
```

usage
```
npm run json <json filename>
```

output
```
all files in dir dataurl2File_YYYY-MM-DD
```