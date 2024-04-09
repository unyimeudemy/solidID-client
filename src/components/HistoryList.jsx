
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from '../lib/api/axios'
import DateTimeDisplay from './DateTimeDisplay'



const Container = styled.div`
    /* height: 100%;
    width: 100%;
    background-color: transparent;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px; */

        width: 100%;
    height: 100%;
    background-color: transparent;
    gap: 10px;
`

const Box = styled.div`
width: 100%;
height: 50px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;
`

const DetailHeader = styled.div`
    font-size: 35px;
    font-weight: 800;
    color: #31363F;
`

const ListBody = styled.div`
    width: 100%;
    height: 400px;
    background-color: transparent;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
`

const Hr = styled.hr`
    color: #222831;
    width: 100%;
`

export const HistoryList = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
      const fetchHistoryList = async () => {
        const res = await Axios.get("/user/history");
        setHistory(res);
        console.log("res: ", res);
      }
    fetchHistoryList();
      
    }, [])
    

    console.log("history: ", history.data[0]);

  return (
    <Container>
    <Box>
        <DetailHeader>History</DetailHeader>
    </Box>
    <ListBody>
        {/* {allMembers.map((member) => (
        <MemberWrapper key={member.id}>
            <Hr/>
            <Member>
                 <ProfileImage></ProfileImage>
                 <NameAndRole>
                     <FirstAndLastNames>{member.staffName}</FirstAndLastNames>
                     <Role>{member.staffRole}</Role>
                 </NameAndRole>
             </Member>
        </MemberWrapper>
        ))}  */}
         {/* <DateTimeDisplay dateTimeString={history.data[0].date}/>  */}

        <Hr/>
    </ListBody>
</Container>
  )
}
