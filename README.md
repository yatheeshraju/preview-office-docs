# preview-office-docs

> A React component to embed and preview office documents on website using Microsoft's officeapps.live.com .

[![NPM](https://img.shields.io/npm/v/preview-office-docs.svg)](https://www.npmjs.com/package/preview-office-docs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save preview-office-docs
```

## Requirements

Files urls must be publicly accessible over internet

Supported formats .ppt .xls .doc .odt .ods .odp

Uses Microsoft officeapps . Check their terms when using .

## Demo 

[preview-office-docs](https://yatheeshraju.github.io/preview-office-docs/)

## Usage

```jsx
import React, { Component } from 'react'

import Preview from 'preview-office-docs'

class Example extends Component {
  render() {
    return (
      <div>
        <Preview
          url='https://file-examples-com.github.io/uploads/2017/08/file_example_PPT_250kB.ppt'
          height='700px'
          width='800px'
        />

        <Preview
          url='https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls'
          height='700px'
          width='800px'
        />

        <Preview
          url='https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc'
          height='700px'
          width='800px'
        />

        <Preview
          url='https://file-examples-com.github.io/uploads/2017/10/file-sample_100kB.odt'
          height='700px'
          width='800px'
        />

        <Preview
          url=' https://file-examples-com.github.io/uploads/2017/10/file_example_ODS_10.ods'
          height='700px'
          width='800px'
        />

        <Preview
          url='https://file-examples-com.github.io/uploads/2017/10/file_example_ODP_200kB.odp'
          height='700px'
          width='800px'
        />
      </div>
    )
  }
}
```
## Props



|  prop  |    is    |         description         |                                  example                                  |
| :----: | :------: | :-------------------------: | :-----------------------------------------------------------------------: |
|  url   | required |   url of the hosted file    | https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc |
| height | optional | height of preview component |                                   500px                                   |
| width  | optional | width of preview component  |                                   500px                                   |



## License

MIT © [yatheeshraju](https://github.com/yatheeshraju)