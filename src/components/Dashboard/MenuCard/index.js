import classes from "./MenuCard.module.css";
import menuImg from "../../../assets/menuImg.jpeg";

const MenuCard = ({ index }) => {
  return (
    <div key={index} className={classes.job_container}>
      <div>
        <img className={classes.imag} src={menuImg} alt="Food" />
      </div>

      <div className={classes.foodNameRoot}>
        <span className={classes.foodName}>Food Name {index}</span>
        <div className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
          magna, mattis id sapien eget, maximus pharetra ligula. Praesent eu
          nisl sit amet risus malesuada maximus imperdiet ut nisl.
        </div>
        <button className={classes.btn}>Subscribe</button>
      </div>
    </div>
  );
};

export default MenuCard;
