import React from 'react'
import styled from '@emotion/styled'
import Layout from './layout'
import Header from './helmet'
import { useMarkdownData } from '../utils'

const MainSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  color: #fff;
  margin: 30px;

  & > .main-text {
    width: 80%;
    font-size: 1.3rem;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  & > .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > p {
      flex-shrink: 0;
      flex-basis: 24%;
      min-width: 250px;
      margin: 0 5px 20px;

      & > img {
        border-radius: 10px;
        width: 100%;
      }
    }
  }
`

const Line = styled.div`
  border-top: 1px solid #fff;
  width: 60%;
  margin: 20px 0;
`

const MainPage: React.FC = () => {
  const mainText = useMarkdownData('ข้อความหน้าหลัก')
  const images = useMarkdownData('รูปภาพในเว็บไซต์')
  return (
    <Layout>
      <Header pageTitle='เบเกอรี่แสนอร่อย' />
      <MainSection>
        {/* Logo will be here, some day. Stay tune! */}
        <h1>Logo Here</h1>
        {/* I have a problem with Ilustrator, so use this hr first. */}
        <Line />
        {typeof mainText !== 'undefined' && typeof images !== 'undefined' ? (
          <>
            <div
              className='main-text'
              dangerouslySetInnerHTML={{ __html: mainText.node.html }}
            />
            <div
              className='images'
              dangerouslySetInnerHTML={{ __html: images.node.html }}
            />
          </>
        ) : (
          <div>loading...</div>
        )}
      </MainSection>
    </Layout>
  )
}

export default MainPage
