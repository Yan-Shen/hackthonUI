import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Flexbox from 'flexbox-react';
import axios from 'axios';
// import Logo from '../../public/PruLogo.jpg'


const products = [
  {
    value: 'FIA - PruSecure FIA (7-yr CDSC)',
    label: 'FIA - PruSecure FIA (7-yr CDSC)',
  },
  {
    value: 'PDI - Prudential Defined Income',
    label: 'PDI - Prudential Defined Income',
  },
  {
    value: 'PPB - Premier Retirement B',
    label: 'PPB - Premier Retirement B',
  },
];

const benefits = [
  {
    value: 'No Benefit Selection',
    label: 'No Benefit Selection',
  },
  {
    value: 'WI001 - Single DIB',
    label: 'WI001 - Single DIB',
  },
  {
    value: 'WS001 - Spousal DIB',
    label: 'WS001 - Spousal DIB',
  },
  {
    value: 'IG033 - HDI v3.0',
    label: 'IG033 - HDI v3.0',
  },
  {
    value: 'IG035 - HDI v3.0 HA DB',
    label: 'IG035 - HDI v3.0 HA DB',
  },
  {
    value: 'IG034 - HDI v3.0 HD DB',
    label: 'IG034 - HDI v3.0 HD DB',
  },
  {
    value: 'IS021 - SHDI v3.0',
    label: 'IS021 - SHDI v3.0',
  },
  {
    value: 'IS023 - SHDI v3.0 HA DB',
    label: 'IS023 - SHDI v3.0 HA DB',
  },
];

const contacts = [
  {
    value: 'Email',
    label: 'Email',
  },
  {
    value: 'Text Message',
    label: 'Text Message',
  },
  {
    value: 'Email & Text',
    label: 'Email & Text',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      // width: 200,
    },
  },
  header:{
    height: 50,
    width: "100%",
    color:"#ffffff",
    margin:"auto",
    position: "fixed",
    top: 0,
    backgroundColor: "rgba(0, 123, 195, 0.3)",
    textAlign:"center",
    // backgroundColor: "#007bc3",
    fontWeight: 700,
    fontSize:"xx-large",
    fontFamily: '"Comic Sans MS", cursive, sans-serif'
  },
  gap:{
    height: 50,
    width: "100%",
    backgroundColor: "#002247"
  },
  choiceCard:{
    margin: "auto",
    width: "100%",
    height: 900,
    backgroundColor: "rgba(0, 34, 71, 0.8)",
  },
  card: {
    minWidth: 275,
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    width: "80%"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  inputField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    minWidth: 300,
  },
  labelField:{
    // fontWeight: 700,
  },
  resposneElement: {
    // backgroundColor: "#93C3DE",
    margin: 20,
    padding: 15,
  },
  responseField:{
    margin: 10,
    fontSize: 15,
    padding: 10
  },
  keyField: {
    minWidth: 500,
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    height: 50,
  },
  menu: {
    width: 200,
  },
}));

const sample = [
  // {response: []}
  {}
]
export default function SimpleCard() {
    const classes = useStyles();
    const [show, setShow] = React.useState(false);
    const [isCase, setIsCase] = React.useState(false);
    const [product, setProduct] = React.useState('');
    
    const [benefit, setBenefit] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [contract, setContract] = React.useState('E12345');
    const [fpName, setFpName] = React.useState('');
    const [responseLoads, setResponseLoads] = React.useState(sample)

    const handleCaseChange = event => {
      setIsCase(true);
      console.log("isCase=============", isCase);
    };
    const handleProductChange = event => {
      setProduct(event.target.value);
      console.log("porduct=============", product);
    };
    const handleBenefitChange = event => {
      setBenefit(event.target.value);
      console.log("benefit=============", benefit);
    };
    const handleContactChange = event => {
      setContact(event.target.value);
      console.log("contact=============", contact);
    };
    const handleEmailChange = event => {
      setEmail(event.target.value);
      console.log("email=============", email);
    };
    const handlePhoneChange = event => {
      setPhone(event.target.value);
      console.log("phone=============", phone);
    };
    const handleContract = event =>{
      setContract(event.target.value);
      console.log("contract=============", contract);
    }

    const handleFpName = event =>{
      setFpName(event.target.value);
      console.log("fpNAme=============", fpName);
    }
    const handleArray = elements=>{
      return Array.isArray(elements) ? true : false;
      };

    const handleSend = () => {
      const payload = {
        contract: contract,
        body: undefined,
      }
      const options = {
        method: 'POST',
        url: 'https://0y1ydvsq1a.execute-api.us-east-1.amazonaws.com/prod/postwoman',
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        data: payload
      };
      console.log("options======", JSON.stringify(options));
      axios(options)
        .then(function (response) {
          console.log("response.data=======", response.data)
          setShow(true);
          if(!Array.isArray(response.data)) {
            let resData = response.data;
            if (typeof response.data !== 'object') {
              console.log("json parse triggered=====================")
              resData=JSON.parse(response.data);
            }
            let resEntity = Object.keys(resData).map(key=>{    
              let transformedEle = {}   
              Array.isArray(resData[key]) ? transformedEle[key] = resData[key] : transformedEle[key] = [resData[key]];             
              return transformedEle;
            })
            console.log("resEntity=======", resEntity)
            setResponseLoads(resEntity);
          } else {
            // if response is array
            setResponseLoads(response.data);
          }
          console.log("responsePayload=========", responseLoads)
        })
        .catch(err=>console.log(("error============="), err));
    }

return (
  <Flexbox flexDirection="column" alignItems="center">
    <div className={classes.header}>
    {/* <img src={Logo}/> */}
      Prudential Annuities - Internal Replacement Case Submission
      </div>

<div className={classes.gap}></div>
  {!isCase &&
      <Card className={classes.choiceCard}>
      <CardContent>
        <Flexbox justifyContent="center" alignItems="center">
          <Flexbox>
          <Button
                  variant="contained"
                  color="primary"
                  href="#outlined-buttons"
                  className={classes.button}
                  onClick={handleCaseChange}
                > Case Submission </Button>
          </Flexbox>
          <Flexbox>
            <Button
              variant="contained"
              color="primary"
              href="#outlined-buttons"
              className={classes.button}
              // onClick={handleSend}
            > Requires Replacement Execution</Button>
          </Flexbox>

        </Flexbox>
      </CardContent>
    </Card>
  }

{isCase && 
        <Card className={classes.card}>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
          <Flexbox flexDirection="row" flexWrap="wrap" alignItems="center" >
            <Flexbox>
              <TextField id="outlined-basic"  
                  label="Contract Number"
                  variant="outlined"
                  className={classes.inputField}
                  margin="normal"
                  onChange={handleContract}
                  >
                    {contract}
                  </TextField>
              </Flexbox>
              <Flexbox>
                <TextField
                      id="standard-select-currency"
                      select
                      label="To Product"
                      className={classes.textField}
                      value={product}
                      onChange={handleProductChange}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      margin="normal"
                    >
                      {products.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
              </Flexbox>
              <Flexbox>
                <TextField
                      id="standard-select-currency"
                      select
                      label="To Benefit"
                      className={classes.textField}
                      value={benefit}
                      onChange={handleBenefitChange}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      margin="normal"
                    >
                      {benefits.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
              </Flexbox>
            </Flexbox>
  
  {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Flexbox flexDirection="row" flexWrap="wrap" alignItems="center" >
            <Flexbox>
              <TextField id="outlined-basic"  
                  label="Financial Professional Name"
                  variant="outlined"
                  className={classes.inputField}
                  margin="normal"
                  onChange={handleFpName}
                  >
                    {fpName}
                  </TextField>
                  {/* <div>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  </div> */}
              </Flexbox>
              <Flexbox>
                <TextField
                      id="standard-select-currency"
                      select
                      label="Desired Contact Method"
                      className={classes.textField}
                      value={contact}
                      onChange={handleContactChange}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                      margin="normal"
                    >
                      {contacts.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                    ))}
                  </TextField>
              </Flexbox>
              <Flexbox flexDirection="column">
              {(contact==="Email" || contact==="Email & Text") &&                         
                <TextField id="outlined-basic"  
                    label="Email Address"
                    variant="outlined"
                    className={classes.inputField}
                    margin="normal"
                    onChange={handleEmailChange}
                    >
                      {email}
                  </TextField>
              }
              {(contact==="Text Message" || contact==="Email & Text") && 
                <TextField id="outlined-basic"  
                label="Contact Phone"
                variant="outlined"
                className={classes.inputField}
                margin="normal"
                onChange={handlePhoneChange}
                >
                  {phone}
                </TextField>
              }
              </Flexbox>
            </Flexbox>
  
            <Flexbox justifyContent="flex-end">
              <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
                className={classes.button}
                onClick={handleSend}
                > Submit </Button>
            </Flexbox>
          </form>
        </CardContent>
      </Card>
      }
 { (isCase && !show && Object.keys(responseLoads).length === 0) && 
   <CircularProgress />
 }
 {(isCase && show) && 
    <Card className={classes.card}>
    <CardContent>
    {responseLoads.map(payload=> (
        <div key={payload} className={classes.resposneElement}>
          {Object.keys(payload).map(firstKey=>(
            <div key={JSON.stringify(payload[firstKey])}>
              <Button variant="contained" color="primary">{firstKey} </Button>
              <Flexbox flexDirection="column">
                {payload[firstKey].map(innerArrayEle => (
                                <TextareaAutosize
                                rows={2}
                                // value = {JSON.stringify(innerArrayEle).replace(/,/g, ',\n')}
                                value = {innerArrayEle}
                                key={JSON.stringify(innerArrayEle)}
                                id="outlined-basic"
                                variant="outlined"
                                className={classes.responseField}
                                margin="dense"
                                >
                              </TextareaAutosize>
                ))}
              </Flexbox>
            </div>
          )) }
        </div>
      ))}

    </CardContent>
    </Card>
    }
    
    </Flexbox>
  );
}
