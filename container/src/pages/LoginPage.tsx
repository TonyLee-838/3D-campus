import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = () => {
    history.push('/map');
  };

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title='Web3D教学平台' />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id='username'
              type='email'
              label='用户名'
              placeholder='请输入用户名'
              margin='normal'
            />
            <TextField
              fullWidth
              id='password'
              type='password'
              label='密码'
              placeholder='请输入密码'
              margin='normal'
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            style={{ marginBottom: 10 }}
            variant='contained'
            size='large'
            color='secondary'
            className={classes.loginBtn}
            onClick={handleLogin}
          >
            登录
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`,
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      flexGrow: 1,
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff',
    },
    card: {
      marginTop: theme.spacing(10),
    },
  })
);

export default Login;
