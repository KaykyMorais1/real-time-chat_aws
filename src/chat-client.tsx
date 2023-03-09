import React from 'react'
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import './chat-client.css';

interface Props {
  isConnected: boolean;
  members: string[];
  chatRows: React.ReactNode[];
  onPublicMessage: () => void;
  onPrivateMessage: (to: string) => void;
  onConnect: () => void;
  onDisconnect: () => void;
  onBotMessage: () => void;
}

export const ChatClient = (props: Props) => {

  return (
    <div className='main-div'>
      <CssBaseline />
      <Container className='main-container'>
        <Grid container style={{ height: '100%' }}>
          {/** Grid com os contatos conectados */}
          <Grid item xs={2} 
            sx={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
            style={{ 
              backgroundColor: '#800080 ',
              color: 'white',
              fontFamily: 'segoe UI',
            }}
            >
            <List component="nav" style={{ marginRight: '20px' }}>
              {props.members.map(item =>
                <ListItem className='list-item-users' key={item} onClick={() => {{props.onPrivateMessage(item)};}}>
                  <ListItemText style={{ fontWeight: 800, color: 'white' }} primary={item} />
                </ListItem>
              )}
            </List>
          </Grid>
          {/* Grid das mensagens enviadas  */}
          <Grid style={{ position: 'relative', overflowY:'scroll', maxHeight: '100%'}} item container direction="column" xs={10} >
            <Paper style={{ minWidth:'12rem' ,flex: 1, backgroundColor: '#4b0082 ', borderRadius: '0px 10px 10px 0px' }}>
              <Grid item container style={{ height: '100%' }} direction="column">
                <Grid item container style={{ flex: 1 }}>
                  <ul style={{
                    paddingTop: 20,
                    paddingLeft: 44,
                    listStyleType: 'none',
                  }}>
                    {props.chatRows.map((item, i) =>
                      <li key={i} className='message'>{item}</li>
                    )}
                  </ul>
                </Grid>
                {/* Botões de envio de mensagem */}
                <Grid item style={{ margin: 10 }}>
                  {props.isConnected && <Button style={{ marginTop: 10, marginRight: 7, color: "white", borderColor: "transparent", backgroundColor: '#7f00ff', fontWeight: 'bold'}} variant="outlined" size="small" disableElevation onClick={props.onPublicMessage}>Mensagem pública</Button>}
                  {props.isConnected && <Button style={{ marginRight: 7, marginTop: 10, color: "white", borderColor: "transparent", backgroundColor: '#7f00ff', fontWeight: 'bold' }} variant="outlined" size="small" disableElevation onClick={props.onBotMessage}>Mensagem para o Bot</Button>}
                  {props.isConnected && <Button style={{ marginRight: 7, marginTop: 10, color: "white", borderColor: "transparent", backgroundColor: '#c40000', fontWeight: 'bold'}} variant="outlined" size="small" disableElevation onClick={props.onDisconnect}>Sair</Button>}
                  {!props.isConnected && <Button style={{ marginRight: 7, marginTop: 10, color: "white", borderColor: "transparent", backgroundColor: '#32cd32', fontWeight: 'bold'}} variant="outlined" size="small" disableElevation onClick={props.onConnect}>Entrar</Button>}
                </Grid>
              </Grid>
              <div style={{ backgroundColor: props.isConnected ? '#00da00' : '#e2e2e2',}}
              className='sec-div' />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div >
  )
};