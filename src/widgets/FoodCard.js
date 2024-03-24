import React, { useState } from 'react';
import { Card } from '@mui/material'; 
import Grid from "@mui/material/Grid";
import FavoriteIcon from '@mui/icons-material/Favorite';

const FoodCard = ({ subtitle, description, price, quantity, title, image }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    setIsClicked(!isClicked);
    if (!isClicked) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const originX = (x / rect.width) * 100;
      const originY = (y / rect.height) * 100;
      e.target.style.transformOrigin = `${originX}% ${originY}%`;
    } else {
      e.target.style.transformOrigin = 'center';
    }
  };

  const handleMouseDown = (e) => {
    setStartPos({ x: e.clientX - pos.x, y: e.clientY - pos.y });
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isClicked) {
      setPos({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <Card sx={{ borderRadius: "1rem", backgroundColor: "var(--black)", position: "relative", maxWidth: "24rem", maxHeight: isClicked ? "12rem" : "9rem", display: "flex", transition: "max-height 0.5s ease-in-out" }} elevation={5}>
      <div style={{ width: "50%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", }}>
        <div style={{ height: "80%", flex: 1, backgroundColor: "var(--red)", justifyContent: "center", alignItems: "center", display: "flex", paddingLeft: "1rem", paddingRight: "1rem" }}>
          <Grid container justifyContent="center" alignItems="center" spacing={0}>
            <Grid item xs={12}>
              <h2 className="font-extrabold" style={{ color: 'var(--white)', fontSize: '2rem' }}>{title}</h2>
            </Grid>
            <Grid item xs={12}>
              <h3 className="font-bold" style={{ color: 'var(--black)' }}>{subtitle}</h3>
            </Grid>
            <Grid item xs={12}>
              <h6 className="font-normal text-justify" style={{ color: 'var(--black)' }}>{description}</h6>
            </Grid>
            <Grid item xs={12} className='flex'>
              <h2 className="font-extrabold" style={{ color: 'var(--black)', fontSize: '2rem' }}>{price}</h2>
              <h2 className="font-extrabold text-align-bottom mt-auto mb-1 ml-1" style={{ color: 'var(--black)', fontSize: '1rem' }}>{quantity}</h2>
            </Grid>
           
          </Grid>
        </div>
      </div>
      <div style={{ width: "50%", height: "100%", position: "relative", overflow: isClicked ? "auto" : "hidden", cursor: isClicked ? "grab" : "default" }}>
        <img
          src={image}
          alt={subtitle}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${isClicked ? 2 : 1})`, // Scale the image when clicked
            transition: "transform 0.5s, width 0.5s, height 0.5s",
          }}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
        />
        {/* <div style={{ position: "absolute", bottom: "0", right: "0", paddingBottom: "1rem", paddingRight: "0.2rem" }}>
          <FavoriteIcon style={{ color: 'var(--opaque)', fontSize: "3rem" }}></FavoriteIcon>
        </div> */}
      </div>
    </Card>
  );
};

export default FoodCard;
