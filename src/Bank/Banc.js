import {
   CalculateButton,
   Container,
   FormItem,
   FormAction,
   FormInput,
   Input,
} from './Banc.styles';
import { nanoid } from 'nanoid';
import Table from '../Table';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../redux/bankSlice';
import { toast } from 'react-hot-toast';

const Banc = () => {
   const dispatch = useDispatch();
   const selector = useSelector(state => state.bank.dataForm);
   // console.log(selector)
   // const [values, setValues] = useState({
   //    'banc-name': 0,
   //    'interest-rate': 0,
   //    'maximum-credit': 0,
   //    'minimum-contribution': 0,
   //    'loan-term': 0,

   // });
   const [bancname, setBancname] = useState('');
   const [interestrate, setInterestrate] = useState('');
   const [maximumcredit, setMaximumcredit] = useState('');
   const [loanterm, setLoanterm] = useState('');

   const [bancnameDirty, setBancnameDirty] = useState(false);
   const [interestrateDirty, setInterestrateDirty] = useState(false);
   const [maximumcreditDirty, setMaximumcreditDirty] = useState(false);
   const [loantermDirty, setLoantermDirty] = useState(false);

   const [bancnameError, setBancnameError] = useState('This field cannot be empty');
   const [interestrateError, setInterestrateError] = useState('This field cannot be empty');
   const [maximumcreditError, setMaximumcreditError] = useState('This field cannot be empty');
   const [loantermError, setLoantermError] = useState('This field cannot be empty');

   const [formValid, setFormValid] = useState(false);

   useEffect(() => {
      if (bancnameError || interestrateError || maximumcreditError || loantermError) {
          setFormValid(false)
      } else {
         setFormValid(true)
       }
   },[bancnameError, interestrateError, maximumcreditError, loantermError])


   const handleInputChange = e => {
      const { name, value } = e.target;
      switch (name) {
         case 'banc-name':
            setBancname(value);
              if (value.length < 1 || value.length > 15) {
               setBancnameError('length should be between 1 - 15 characters')
               if (!value) {
                  setBancnameError('This field cannot be empty')
               }
            } else {
               setBancnameError('')
            }
            break;
         
         case 'interest-rate':
            setInterestrate(value);
              if (value.length < 1 || value.length > 9) {
               setInterestrateError('length should be between 1 - 9 characters')
               if (!value) {
                  setInterestrateError('This field cannot be empty')
               }
            } else {
               setInterestrateError('')
            }
            break;
         
         case 'maximum-credit':
            setMaximumcredit(value)
              if (value.length < 1 || value.length > 2) {
               setMaximumcreditError('length should be between 1 - 2 characters')
               if (!value) {
                  setMaximumcreditError('This field cannot be empty')
               }
            } else {
               setMaximumcreditError('')
            }
            break;
         
         case 'loan-term':
            setLoanterm(value);
              if (value.length < 1 || value.length > 2) {
               setLoantermError('length should be between 1 - 2 characters')
               if (!value) {
                  setLoantermError('This field cannot be empty')
               }
            } else {
               setLoantermError('')
            }
            break;
         
         default:
            return;

      }
      // setValues({
      //    // ...values,
      //    [name]: value,
      // })
   };

   const blurHandler = e => {
      const { name, value } = e.target;
      switch (name) {
         case 'banc-name':
            setBancnameDirty(true);
            break;
         case 'interest-rate':
            setInterestrateDirty(true);
            break;
         case 'maximum-credit':
            setMaximumcreditDirty(true);
            break;
         case 'loan-term':
            setLoantermDirty(true);
            break;
         
         default:
            return;
       }
    }


   // const handelSubmit = e => {
   //    e.preventDefault();
   //    const data = { id: nanoid(), bancname, interestrate, maximumcredit, loanterm }
   //    if (!data) {
   //       return
   //    }
   //    dispatch(addData(data))
   //    setBancname('');
   //    setInterestrate('');
   //    setMaximumcredit('');
   //    setLoanterm('');

   // };

    const handelSubmit = e => {
       e.preventDefault();
          const data = { id: nanoid(), bancname, interestrate, maximumcredit, loanterm }
       const returnName = selector.find(sel => sel.bancname === bancname)

       if (returnName) {
          toast.error('Bank with that name already exists')
       } else {
          dispatch(addData(data))
       }


     
      setBancname('');
      setInterestrate('');
      setMaximumcredit('');
      setLoanterm('');

   };

   return (
      <Container>
         <h1>Create a Bank</h1>

      <form onSubmit={handelSubmit}>
            
           <FormItem>
            <label htmlFor="banc-name">Bank name</label>
               <FormInput>
                  {(bancnameDirty && bancnameError) && <div style={{color: 'red', fontSize: '13px'}}>{bancnameError}</div>}
               <Input
                     type='text'
                     placeholder="banc-name"
                     //  pattern="^[a-zA-Zа-яА-Я]{1,15}"
                     name='banc-name'
                     value={bancname}
                     onChange={handleInputChange}
                     onBlur={blurHandler}
               />
            </FormInput>
         </FormItem>
         
               <FormItem>
            <label htmlFor="interest-rate">Loan Amount</label>
               <FormInput>
                   {(interestrateDirty && interestrateError) && <div style={{color: 'red', fontSize: '13px'}}>{interestrateError}</div>}
               <Input
                  type='number'
                     name='interest-rate'
                     placeholder="loan-amount"
                      pattern="^[a-zA-Zа-яА-Я]{1,2}"
                     value={interestrate}
                     onChange={handleInputChange}
                       onBlur={blurHandler}
               />
            </FormInput>
            </FormItem>

               <FormItem>
            <label htmlFor="maximum-credit">Loan Term (Years)</label>
               <FormInput>
                    {(maximumcreditDirty && maximumcreditError) && <div style={{color: 'red', fontSize: '13px'}}>{maximumcreditError}</div>}
               <Input
                  type='number'
                     name='maximum-credit'
                     placeholder='loan-term'
                     value={maximumcredit}
                     onChange={handleInputChange}
                       onBlur={blurHandler}
               />
            </FormInput>
            </FormItem>

               <FormItem>
            <label htmlFor="loan-term">Interest Rate</label>
               <FormInput>
                    {(loantermDirty && loantermError) && <div style={{color: 'red', fontSize: '13px'}}>{loantermError}</div>}
               <Input
                  type='number'
                     name='loan-term'
                     placeholder='interest-rate'
                     value={loanterm}
                     onChange={handleInputChange}
                       onBlur={blurHandler}
               />
            </FormInput>
            </FormItem>
         <FormAction>
            <CalculateButton disabled={!formValid} type="submit">Create Bank</CalculateButton>
        </FormAction>
         </form>
         {selector.length > 0 && <Table dataForm={selector}/>}
               
            </Container>
   )
};

export default Banc;