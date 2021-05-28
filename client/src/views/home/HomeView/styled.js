import { styled } from '@material-ui/styles';

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
