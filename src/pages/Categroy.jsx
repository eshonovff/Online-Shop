import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
import { Link, useParams } from "react-router-dom"
import { Button, Checkbox } from 'antd';
import { FormControlLabel, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategory, getCategoryById, getProducts } from '../Api/products/product';

function valuetext(value) {
  return `${value}°C`;
}

const Categry = () => {
  const [samsung, setSamsung] = useState(false)
  const [apple, setApple] = useState(false)
  const {id} = useParams();
  const dispatch = useDispatch()
  const [seeAll, setSeeAll] = useState(false)
    const [minvalue, setMinvalue] = useState(0);
    const [maxvalue, setMaxvalue] = useState(100);
    const [value, setValue] = useState([20, 37]);



    useEffect(() =>{
           if(id){
            dispatch(getCategoryById(id))
           }
           dispatch(GetCategory())
           dispatch(getProducts())
           
    },[id])

    const {byID, category, data} = useSelector((state) => state.counterSlice);
    console.log("BYID",data);

    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="px-[5%]">
        <header className="flex justify-between  items-center">
      <h1 className="text-3xl m-10"> <Link to={"/"} className="text-red-500">Home</Link> <span>/Categories</span></h1>
      <select name="" id="" className="w-[10%] h-10">
        <option value="Popular">Popular</option>
      </select>
        </header>
        <div>
        <div>
  {id && (
    <div className="p-10 bg-gray-100 mb-10 rounded-lg shadow-lg">
      <div className="bg-white  flex justify-center items-center rounded-lg overflow-hidden shadow-md">
        <div className="relative ">
          <img
            src={import.meta.env.VITE_APP_FILE_URL + byID?.categoryImage}
            className="w-fit h-64 object-cover object-center"
            alt=""
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <p className="text-white text-2xl font-bold">{byID?.data?.categoryName}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center">
            <div className="text-5xl font-semibold text-gray-800">
              {byID.categoryName}
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )}
</div>


        </div>
        <section className='flex'>
            <div className='mr-4'>
            <Accordion defaultExpanded sx={{width: '100%', background:"transparent" ,maxWidth:"400px"}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button className='w-[100%]  border-none bg-transparent text-red-700'>All products</Button>
           
            {
              category.slice(0,5).map((elem) =>{
                return (
                  <Link key={elem.id} to={`/category/${elem.id}`}>
                  <Button  className='w-[100%] border-none bg-transparent'>{elem.categoryName}</Button>
                  </Link>

                )
              })
            }
            {seeAll &&  
              category.slice(5).map((elem) => {
                return (
                  <Link key={elem.id} to={`/category/${elem.id}`}>
                  <Button  className='w-[100%] border-none bg-transparent'>{elem.categoryName}</Button>
                  </Link>
                )
              })
            }
            
           
            <Button onClick={() => setSeeAll(!seeAll)} className='w-[100%] border-none bg-transparent text-red-700'>See all</Button>
 
        </AccordionDetails>
      </Accordion>


      <Accordion defaultExpanded sx={{width: '100%', background:"transparent" ,maxWidth:"400px"}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='flex flex-col gap-2 ml-[30%]'>
          <FormControlLabel control={<Checkbox defaultChecked checked={samsung} onClick={() => setSamsung(!samsung)} />} label="Samsung" />
          <FormControlLabel control={<Checkbox defaultChecked checked={apple} onClick={ () => setApple(!apple)} />} label="Apple" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Xiaomi" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Huawei" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Pocco" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Lenovo" />
          <Button className='w-[50%] mt-5 border-none bg-transparent text-red-700'>See all</Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{width: '100%', background:"transparent" ,maxWidth:"400px"}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='flex flex-col gap-2 ml-[30%]'>
          <FormControlLabel control={<Checkbox defaultChecked  />} label="Metallic" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Plastic cover" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="8GB Ram" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Super power" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Large Memory" />
          <Button className='w-[50%] mt-5 border-none bg-transparent text-red-700'>See all</Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{width: '100%', background:"transparent" ,maxWidth:"400px"}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={minvalue}
        max={maxvalue}
      />
    </Box>
          </Typography>
          <div className='flex gap-2'>
            <TextField placeholder='0' value={minvalue} onChange={(event) => setMinvalue(event.target.value)} label='min'/>  
            <TextField label='max' value={maxvalue} onChange={(event) => setMaxvalue(event.target.value)} placeholder='999999'/>  
          </div>
          <Button className='w-full mt-5 h-10'>Apply</Button>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded sx={{width: '100%', background:"transparent" ,maxWidth:"400px"}}>
        <AccordionSummary
        
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='flex flex-col gap-2 ml-[30%]'>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Metallic" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Plastic cover" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="8GB Ram" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Super power" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Large Memory" />
          <Button className='w-[50%] mt-5 border-none bg-transparent text-red-700'>See all</Button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

            </div>
            <div className='flex flex-wrap h-fit gap-5 justify-between'>
           {
            data?.map((elem) =>{
              return (
                <div key={elem.id}  style={{boxShadow:"0 0 10 0 black"}} className="flex flex-col w-full p-2 h-fit max-w-[300px]">
              
                <img
                  loading="lazy"
                  srcSet= {import.meta.env.VITE_APP_FILE_URL + elem.image}
                  className="object-contain w-full  h-[100%] bg-white max-w-[200px] max-h-[200px] aspect-[1.08]"
                />
                <div className="flex flex-col self-start mt-4">
                  <div className="text-base font-medium text-black">
                    {elem.productName}
                  </div>
                  <div className="flex gap-2 items-center mt-2 whitespace-nowrap">
                    <div className="gap-3 self-stretch my-auto text-base font-medium text-red-500">
                      ${elem.price}
                    </div>
                    <div className="flex gap-2 items-start self-stretch my-auto text-sm font-semibold text-black">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5959a135433b538e23679e77422b3d816e56dd82cae6866c502d00ccf1435149?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                        className="object-contain shrink-0 aspect-[5] w-[100px]"
                      />
                      <div className="w-8 opacity-50">({elem.quantity})</div>
                    </div>
                  </div>
                </div>
                      </div>
              )
            })
           }
            </div>
        </section>

    </div>
  )
}

export default Categry



 

 