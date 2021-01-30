import React from 'react';
import styled from 'styled-components'

import Preview from 'preview-office-docs'

const App = () => {
  const Div = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
  `;
  const Title =styled.h3`
  font-weight:bold;
  
  `;
  const Code =styled.pre`
  background-color:ghostwhite;
  color:black;
  `;

  const Heading =styled.h1`
  font-weight:bold;
  `;
  return (<Div>

    <Heading>
      Preview Office Docs Examples 
    </Heading>
<Code>
{`<Preview 
url="https://file-examples-com.github.io/uploads/2017/08/file_example_PPT_250kB.ppt" 
height='450px' 
width='800px'/>`
}
</Code>

    <Preview/>

    <Title>PPT</Title>
    <Preview url="https://file-examples-com.github.io/uploads/2017/08/file_example_PPT_250kB.ppt" height='450px' width='800px'/>
    <Title>XLS and XLSX</Title>
    <Preview url="https://file-examples-com.github.io/uploads/2017/02/file_example_XLS_10.xls"  height='450px' width='800px'/>
    <Title>DOC</Title>
    <Preview url="https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc"  height='450px' width='800px'/>
    <Title>ODT</Title>
    <Preview url="https://file-examples-com.github.io/uploads/2017/10/file-sample_100kB.odt"  height='450px' width='800px'/>
    <Title>ODS</Title>
    <Preview url=" https://file-examples-com.github.io/uploads/2017/10/file_example_ODS_10.ods"  height='450px' width='800px'/>
    <Title>ODP</Title>
    <Preview url="https://file-examples-com.github.io/uploads/2017/10/file_example_ODP_200kB.odp"  height='450px' width='800px'/> 
   
  </Div>)
  
}

export default App
