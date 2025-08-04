import { useState } from 'react';
import "./Addproduct.css"
const AddProduct = ({ onAdd }) => {
    const [title , setTitle] = useState('');
    function submitform(e) {
        e.preventDefault();

        onAdd({ title })

        setTitle('')
    }
    return  (

        <>
        <form className="add-product-form" onSubmit={submitform}>
            <div className="form-control">
                <input
                 type='text'
                  placeholder='Add new Book' 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  />
            </div>
            <button type='submit' className="add-btn">
                Add
            </button>
        </form>
        </>
    )
};

export default AddProduct;
