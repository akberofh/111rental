import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import styles from "./Adminpanel.module.css";
import Header from "../../components/Header/Header";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  postProducts,
  deleteProducts,
} from "../../redux/thunks/products/thunk";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiUser, FiSun, FiMoon, FiHeart } from "react-icons/fi";
import { supabase } from "../../supabase/supabase";
import Drawer from "react-modern-drawer";
import { BiMenuAltRight } from "react-icons/bi";

const Adminpanel = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("date"); // Default "Tarixə görə"

  // 
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("dark-mode") == null ? false : localStorage.getItem("dark-mode"));
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { user, loading } = useAuth();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDarkMode = () => {
    const tempV = !isDarkMode;

    setIsDarkMode(tempV);
/*     document.body.classList.toggle("dark-mode"); */
  const rootElement = document.getElementById("root");
    if (tempV) {
      rootElement.setAttribute("data-theme", "dark");
    } else {
      rootElement.removeAttribute("data-theme");
    }
  };  

  // 

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products.products);

  const filteredProducts = products
    ? products
        .filter((car) =>
          car.brand.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          if (sortOrder === "asc") return a.pricePerDay - b.pricePerDay;
          if (sortOrder === "desc") return b.pricePerDay - a.pricePerDay;
          return new Date(b.createdAt) - new Date(a.createdAt); // Default tarixə görə sıralama
        })
    : [];

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      dispatch(postProducts(values));
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  const deleteItem = (id) => {
    dispatch(deleteProducts(id));
  };

  return (
    <div className={styles.Container}>
     <div className={styles.Containe}>
        <div className={styles.navLogo}>
        <a onClick={() => navigation("/")} href="">111 Rent A Car</a>
      </div>

      <div className={styles.navbar}>
        <ul>
          <a onClick={() => navigation("/cars")} href="">Avto Park</a>
          <a onClick={() => navigation("/services")} href="">
            Dashboard
          </a>
          <a onClick={() => navigation("/rules")} href="">
            Rezervasiya
          </a>
          <a onClick={() => navigation("/contact")} href="">
            Əlaqə
          </a>
        </ul>
      </div>

      <div className={styles.navActions}>
        <div
          className={styles.userIcon}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <FiUser size={24} />
          {isUserMenuOpen && (user ? (
            <div className={styles.userMenu}>
              <a onClick={async () => {
                await supabase.auth.signOut();
              }}>Sign out</a>
            </div>
          ) : (
            <div className={styles.userMenu}>
              <a href="/login">Sign in</a>
              <a href="/register">Sign up</a>
            </div>
          ))}
        </div>

        <div className={styles.themeToggle} onClick={toggleDarkMode}>
          {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </div>

        <div className={styles.wishlist}>
          <FiHeart onClick={() => navigation("/wishlist")} size={24} />
        </div>

        <div className={styles.menu}>
          <button onClick={toggleDrawer}>
            <BiMenuAltRight size={35} />
          </button>
          <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
            <div className={styles.Menu}>
              <div className={styles.themeToggleTwo} onClick={toggleDarkMode}>
                {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
              </div>
              <div className={styles.menuBar}>
                <ul>
                  <a onClick={() => navigation("/cars")} href="">Avto Park</a>
                  <a onClick={() => navigation("/services")} href="">
                  Dashboard
                  </a>
                  <a onClick={() => navigation("/rules")} href="">
                  Rezervasiya
                  </a>
                  <a onClick={() => navigation("/contact")} href="">
                    Əlaqə
                  </a>
                </ul>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
     </div>
      <div className={styles.Contain}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="image">Maşının şəkili</label>
          <ImageUploader />
          {/* <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          /> */}
          <label htmlFor="brand">Marka</label>
          <input
            id="brand"
            name="brand"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.brand}
          />
          <label htmlFor="model">Model</label>
          <input
            id="model"
            name="model"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.model}
          />
          <label htmlFor="year">İli</label>
          <input
            id="year"
            name="year"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.year}
          />
          <label htmlFor="color">Rəngi</label>
          <input
            id="color"
            name="color"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.color}
          />
          <label htmlFor="engine">Mühərrik</label>
          <input
            id="engine"
            name="engine"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.engine}
          />
          <label htmlFor="capacity">Neçə nəfərlik olduğu</label>
          <input
            id="capacity"
            name="capacity"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.capacity}
          />
          <label htmlFor="fuelConsumption">Yanacaq sərfiyyatı</label>
          <input
            id="fuelConsumption"
            name="fuelConsumption"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.fuelConsumption}
          />
          <label htmlFor="fuelType">Yanacaq növü</label>
          <input
            id="fuelType"
            name="fuelType"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fuelType}
          />
          <label htmlFor="transmission">Sürətlər qutusu</label>
          <input
            id="transmission"
            name="transmission"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.transmission}
          />
          <label htmlFor="pricePerDay">Günlük icarə qiyməti</label>
          <input
            id="pricePerDay"
            name="pricePerDay"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.pricePerDay}
          />
          <button type="submit">Submit</button>
        </form>
        <div className={styles.FilterSortSection}>
          <input
            type="text"
            placeholder="Markaya görə axtar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="date">Tarixə görə</option>
            <option value="asc">Əvvəlcə ucuz</option>
            <option value="desc">Əvvəlcə bahalı</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Maşının şəkili</th>
              <th>Marka</th>
              <th>Model</th>
              <th>Günlük icarə qiyməti</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((car) => (
              <tr key={car._id}>
                <td>
                  <img src={car.image} alt={car.brand} />
                </td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.pricePerDay} Manat</td>
                <td>
                  <button onClick={() => deleteItem(car._id)}>Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminpanel;
