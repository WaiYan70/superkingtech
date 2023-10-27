import React, { useCallback, useEffect, useState, useRef } from 'react';

// Importing Components
import Helmet from '../components/Helmet';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import InfinityList from '../components/InfinityList';

// importing the data from "assets folder"
import productData from '../assets/data/product';
import category from '../assets/data/category';
import colors from '../assets/data/product-color';

const Catalog = () => {

  const initFilter = {
    category: [],
    color:[]
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if(checked){
      switch(type){
        case "CATEGORY":
          setFilter({...filter, category: [...filter.category, item.categorySlug]}) 
          break;
        case "COLOR":
          setFilter({...filter, color: [...filter.color, item.color]})
          break;
        default:
      }
    } else {
      switch(type){
        case "CATEGORY":
          const newCategory = filter.category.filter(e => e !== item.categorySlug)
          setFilter({...filter,category: newCategory})
          break;
        case "COLOR":
          const newColor = filter.color.filter(e => e !== item.color)
          setFilter({...filter,color: newColor})
          break;
        default:
      }
    }
  }

  const clearFilter = () => setFilter(initFilter)

  const updateProducts = useCallback(
    () => {
      let temp = productList;

      if(filter.category.length > 0){
        temp = temp.filter(e => filter.category.includes(e.categorySlug))
      }

      if(filter.color.length > 0){
        temp = temp.filter(e => {
          const check = e.colors.find(color => filter.color.includes(color))
          return check !== undefined
        })
      }
      setProducts(temp)
    }, [filter, productList],
  );

  useEffect(()=>{
    updateProducts();
  },[updateProducts]);

  // "clear filter" button for tablet and mobile 
  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle('active');

  return (
    <Helmet title="Catalog">
      <div className="catalog">
        {/* Catalong Filter */}
        <div className="catalog__filter" ref={filterRef}>
          <div className="catalog__filter__close" onClick={()=> showHideFilter()}>
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          {/* Catagory : Monitor, Mouse, KeyBoard */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Product Category
            </div>
            <div className="catalog__filter__widget__content">
              {
                category.map((item, index) => (
                  <div key={index} className="catalog__filter__widget__content__item">
                    <CheckBox 
                      label={item.display}
                      onChange={(input)=>filterSelect("CATEGORY", input.checked, item)}
                      checked={filter.category.includes(item.categorySlug)}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          {/* The End of Catagory : Monitor, Mouse, KeyBoard */}
          {/* Color : Mouse ==> JR7 JR8 */}
            <div className="catalog__filter__widget">
              <div className="catalog__filter__widget__title">
                Pick the Color
              </div>
              <div className="catalog__filter__widget__content">
                {
                  colors.map((item, index) => (
                    <div key={index} className="catalog__filter__widget__content__item">
                      <CheckBox 
                        label={item.display}
                        onChange={(input)=>filterSelect("COLOR", input.checked, item)}
                        checked={filter.color.includes(item.color)}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          {/* The End of Color : Mouse ==> JR7 JR8 */}
          {/* Button for Filtering */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button size="sm" onClick={clearFilter}>
                Clear Filter
              </Button>
            </div>
          </div>
          {/* The End of Button for Filtering */}
        </div>
        {/* The End of Catalong Filter */}
        <div className="catalog__filter__toggle">
          <Button size="sm" onClick={() => showHideFilter()} >
            Filter
          </Button>
        </div>
        {/* All Products Catalog Lists with Infinite scrolling "component" */}
        <div className="catalog__content">
          {/* <Grid
            col={3}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              products.map((item, index) => (
                <ProductCard
                    key={index}
                    img01={item.image01}
                    img02={item.image02}
                    name={item.title}
                    price={item.price}
                    slug={item.slug}
                  />
              ))
            }
          </Grid> */}
          <InfinityList
            data={products}
          />
        </div>
        {/* The End of All Products Catalog List with Infinite scrolling "component" */}
      </div>
    </Helmet>
  )
}

export default Catalog;