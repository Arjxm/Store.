import React, {useState} from 'react';
import {Backdrop, Button} from "@mui/material";
import styled from "styled-components";

const AddProductForm = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // do something with the form data
    };

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    return(
        <>
            <Button onClick={handleToggle}>Add Product</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >

                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Product Price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Image url"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Beneficiary address"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <SubmitButton type="submit">Add</SubmitButton>
                </Form>
            </Backdrop>
        </>
    )
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2f2f2f;
  padding: 42px 24px;
  width: 18%;
  border-radius: 36px;
  
`;

const Input = styled.input`
  border-radius: 42px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: none;
`;

const SubmitButton = styled.button`
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2c3e50;
  }
`;
export default AddProductForm;