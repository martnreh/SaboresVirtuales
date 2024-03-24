import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo.png";
import { Divider } from 'primereact/divider';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import FoodCard from '../widgets/FoodCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import tacoTrompo from "../assets/tacos_trompo.png";
import tacoChicharron from "../assets/tacos_chicharron.png";
import tacoRes from "../assets/tacos_res.png";
import tacoBistec from "../assets/tacos_bistec.jpeg";
import tacoCarnitas from "../assets/tacos_carnitas.jpeg";
import tacoArracherra from "../assets/tacos_arracherra.jpeg";
import tacoCarneAsada from "../assets/tacos_carneasada.jpeg";
import tacoBarbacoa from "../assets/tacos_barbacoa.jpeg";
import campechana from "../assets/campechana.png";
import pirata from "../assets/pirata.png";
import norteña from "../assets/norteña.png";
import papas from "../assets/papas.jpeg";
import frijoles from "../assets/frijoles.png";
import refresco from "../assets/refresco.jpeg";
import agua from "../assets/agua.png";


const categories = [
  {
    id: 1, name: 'SUELTOS', subcategories: [
      {
        id: 1, name: "Maiz", products: [
          { id: 1,  title: "Tacos", subtitle: "Trompo", description: "Relleno de trompo acompañado de cebolla, cilantro y salsa picante. ", price: "$19", quantity:"c/u", image: tacoTrompo },
          { id: 2,  title: "Tacos", subtitle: "Bistec", description: "Relleno de bistec acompañado de cebolla, cilantro y salsa picante. ", price: "$22", quantity:"c/u", image: tacoBistec },
          { id: 3,  title: "Tacos", subtitle: "Res", description: "Relleno de res acompañado de cebolla, cilantro y salsa picante. ", price: "$32", quantity:"c/u", image: tacoRes },
          { id: 4,  title: "Tacos", subtitle: "Chicharron", description: "Relleno de chicharron acompañado de cebolla, cilantro y salsa picante. ", price: "$24", quantity:"c/u", image: tacoChicharron },
          { id: 5,  title: "Tacos", subtitle: "Carnitas", description: "Relleno de carnitas acompañado de cebolla, cilantro y salsa picante. ", price: "$20", quantity:"c/u", image: tacoCarnitas },
        ]
      },
      {
        id: 2, name: "Harina", products: [
          { id: 1,  title: "Tacos", subtitle: "Carne Asada", description: "Relleno de arracherra salsa picante. ", price: "$32", quantity:"c/u", image: tacoCarneAsada },
          { id: 2,  title: "Tacos", subtitle: "Barbacoa", description: "Relleno de trompo acompañado de cebolla, cilantro y salsa picante. ", price: "$25", quantity:"c/u", image: tacoBarbacoa },
          { id: 3,  title: "Tacos", subtitle: "Arracherra", description: "Relleno de arracherra acompañado de cebolla, cilantro y salsa picante. ", price: "$34", quantity:"c/u", image: tacoArracherra },
        ]
      }
    ]
  },
  {
    id: 2, name: 'ESPECIALES', subcategories: [
      {
        id: 1, name: "Especiales", products: [
          { id: 1,  title: "Campe-\nchana", subtitle: "Harina", description: "", price: "$99", quantity:"c/u", image: campechana },
          { id: 2,  title: "Norteña", subtitle: "Harina", description: "", price: "$99", quantity:"c/u", image: norteña },
          { id: 3,  title: "Pirata", subtitle: "Harina", description: "", price: "$99", quantity:"c/u", image: pirata },
        ]
      },
    ]
  },
  {
    id: 3, name: 'EXTRAS', subcategories: [
      {
        id: 1, name: "Extras", products: [
          { id: 1,  title: "Papas", subtitle: "1/2 de Papas", description: "", price: "$25", quantity:"", image: papas },
          { id: 2,  title: "Frijoles", subtitle: "Frijoles Charros", description: "", price: "$30", quantity:"", image: frijoles },
        ]
      },
      
    ]
  },
  {
    id: 4, name: 'BEBIDAS', subcategories: [
      {
        id: 1, name: "Refrescos", products: [
          { id: 1,  title: "Refre-\nscos", subtitle: "Lata 500 ml", description: "", price: "$25", quantity:"", image: refresco },
          { id: 2,  title: "Agua", subtitle: "Botella 650 ml", description: "", price: "$20", quantity:"", image: agua },
        ]
      },
      
    ]
  }
];

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Start with the first category

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setActiveIndex(0); // Set activeIndex to 0 to select the first subcategory tab
  };

  const navigate = useNavigate();
  const handleMenuClick = () => {
    navigate('/');
  };


  return (
    <ErrorBoundary>
      
    
      <div style={{ backgroundColor: "var(--background)" }}>
        <img onClick={handleMenuClick} src={logo} alt="Logo" className="w-auto h-4rem px-1 py-2" />
        <div className='overflow-x-auto overflow-y-hidden white-space-nowrap py-2 px-3 mx-1' style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((category) => (
            <Button
              key={category.id}
              severity={selectedCategory.id === category.id ? 'danger' : 'secondary'}
              rounded
              className={selectedCategory.id === category.id ? 'mr-2' : 'bg-gray-400 opacity-30 mr-2'}
              onClick={() => handleCategorySelect(category)}
            >
              <h5 className="font-normal m-2 center" style={{ color: 'var(--white)' }}>{category.name}</h5>
            </Button>
          ))}
        </div>
        <div className="mx-4 mb-2">
          <Divider className="h-2" />
        </div>
        <div className="ml-4 mb-4 bg-secondary w-100">
          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            {selectedCategory.subcategories.map((subcategory, index) => (
              <TabPanel key={index} header={subcategory.name} className='pr-5' style={{ backgroundColor: "var(--background)" }}>
                <div className='overflow-y-auto max max-h-30rem mt-2'>
                  {subcategory.products.map((product) => (
                    <div className='pb-3' key={product.id}>
                      <FoodCard
                      title={product.title}
                      subtitle={product.subtitle}
                      description={product.description}
                      price={product.price}
                      quantity={product.quantity}
                      image={product.image}
                    />
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabView>
        </div>

        {/* <div className="flex flex-wrap justify-content-center pt-6 mt-6">

          <Button severity="danger" rounded>
            <div className='flex' style={{ alignItems: 'center' }}>
              <FavoriteIcon style={{ color: 'var(--background)', fontSize: "1rem" }} className='ml-2' />
              <h5 className="font-normal" style={{ color: 'var(--white)', margin: "1rem" }}>Favoritos</h5>
            </div>
          </Button>


        </div> */}
      </div>
    </ErrorBoundary>
  );
}

export default Menu;
