import {makeStyles} from '@material-ui/core';

export default makeStyles((theme)=>({


    body:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        alignContent:'center',
        height:'100vh',
       
    },
    header:{
        display:'flex',
        justifyContent:'center',
        marginTop:'10px',
        marginBotton:'10px'
    },
    footer:{
       
        background:"#4146aa",
        width:'100%',
        height:'40px',
        position:'absolute',
        bottom:0,
        left:0,
        fontSize:'10px',
        margin:'auto',
        textAlign:'center',
        paddingTop:'7px',
        color:'white',
    },
    link:{
        textDecoration:'none',
        fontWeight:'bold',
        color:'#010330',
    },
    textField:{
        width:'70%',
        margin:'auto',
        display:'flex',
        marginBottom:'15px',
    },
    alert:{
        marginBottom:'7px',
    },
    media:{
        height:'150',
        width:'150'
    },
    container:{
        maxHeight:'30vh',
        width:'90%',
        margin:'auto',
    }
}));
