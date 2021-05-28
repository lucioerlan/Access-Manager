import { styled } from '@material-ui/styles';
import { Container, Paper } from '@material-ui/core';

export const BoxPainel = styled(Container)({
  flexGrow: 1,
  textAlign: 'center'
});

export const ImgStyle = styled('img')({
  width: '100px',
  height: '100px',
  marginBottom: '20px',
  objectFit: 'cover',
  backgroundSize: '150px',
  '@media(max-width: 800px)': {
    width: '85px',
    height: '85px',
    marginTop: '-25px'
  },
  '@media(max-width: 400px)': {
    width: '85px',
    height: '85px',
    marginTop: '-25px'
  }
});

export const PaperRows = styled(Paper)({
  padding: '10px',
  marginTop: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  whiteSpace: 'normal !important',
  marginBottom: '15px'
});

export const BlockContent = styled('div')({
  transition: 'opacity 0.2s ease-out',
  margin: '15px auto',
  padding: '20px 20px 1px',
  width: '100%',
  overflowX: 'visible',
  paddingBottom: '20px'
});
