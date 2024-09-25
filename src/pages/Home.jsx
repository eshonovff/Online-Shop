import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartProducts,
  GetCategory,
  getProducts,
} from "../Api/products/product";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Home.css";

import { FreeMode, Pagination } from "swiper/modules";
import { Button, Checkbox } from "@mui/material";
import Timer from "./timer";
import Timer2 from "./timer2";

import Section3 from "./companents/section3";
import { Link, useNavigate } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { setWishList } from "../reducer/TodoList";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

   
 

  useEffect(() => {
    dispatch(getProducts());
    dispatch(GetCategory());
  }, []);

  const { data, category, wishlist } = useSelector(
    (state) => state.counterSlice
  );
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
 

  const handleWishClick = (id, elem) => {
 
 
    if (!wishlist.includes(id))
      {
        dispatch(setWishList([...wishlist, elem, id]));
        
      }
      else
      {
      dispatch(setWishList(wishlist.filter((item) => item !== id)));
    }
  };

  useEffect(() =>
  {
    console.log(wishlist)
  } , [wishlist])
 
  

  const handleClick = (id,) => {
    dispatch(addCartProducts(id));
    const token = localStorage.getItem("access_token");
    if (token) {
      dispatch(addCartProducts(id));
    } else {
      navigate("/signIn");
    }
  };
  return (
    <div className="px-[5%]">
      <div className="flex flex-wrap gap-10  items-end pb-5">
        <div className="flex flex-col flex-1 shrink pt-10 pr-5 text-base text-black border-r sm:border-none basis-11 border-black border-opacity-10">
          {category.slice(0, 9).map((elem) => {
            return (
              <Link to={`/category/${elem.id}`} key={elem.id} className="mt-4">
                <h1>{elem.categoryName}</h1>
              </Link>
            );
          })}
        </div>
        <div className="overflow-hidden pt-4 pl-16 bg-black sm:w-[100%]   w-[70%] max-md:max-w-full">
          <div className="flex gap-5 sm:flex-col max-md:flex-col">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto w-full text-base text-neutral-50 max-md:mt-10">
                <div className="flex gap-6 items-center text-center">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/97dfa7537388b5e57021837b67489df12d09e9f579db601211a9f6be819c740b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain shrink-0 self-stretch my-auto w-10 aspect-[0.82]"
                  />
                  <div className="self-stretch my-auto w-[126px]">
                    iPhone 14 Series
                  </div>
                </div>
                <div className="self-stretch mt-5 text-5xl font-semibold tracking-widest leading-[60px] max-md:text-4xl max-md:leading-[56px]">
                  Up to 10% off Voucher
                </div>
                <div className="flex gap-2 items-center mt-6 font-medium text-center">
                  <div className="flex flex-col self-stretch my-auto w-[81px]">
                    <div className="self-start">Shop Now</div>
                    <div className="mt-1 h-px border border-solid bg-neutral-50 border-neutral-50 min-h-[1px] w-[81px]" />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9f9190215df855e46de68e25db2cebf222e4b26191868239034c2f0ce1ceb8?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col items-start pt-72 pb-3 w-full min-h-[328px] max-md:pt-24 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba0439884649bbe49933b1ff3c9e490912eb57e279d12a4655ff9ca5c0f5ccab?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative gap-3 items-center">
                  <div className="flex shrink-0 self-stretch my-auto w-3 h-3 rounded-full bg-white bg-opacity-50 fill-white" />
                  <div className="flex shrink-0 self-stretch my-auto w-3 h-3 rounded-full bg-white bg-opacity-50 fill-white" />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6197da67d2a30b0f3aed051f4377cce1b6b8adcaa3bb6e32f46eb1058f1bcecd?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                  />
                  <div className="flex shrink-0 self-stretch my-auto w-3 h-3 rounded-full bg-white bg-opacity-50 fill-white" />
                  <div className="flex shrink-0 self-stretch my-auto w-3 h-3 rounded-full   bg-white bg-opacity-50 fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-between my-20 items-end">
        <div className="flex flex-col min-w-[240px]">
          <Timer />
        </div>
      </div>

      <div className="text-center my-[50px]">
        <Swiper
          slidesPerView={5}
          breakpoints={{
            670: {
              slidesPerView: 3, //
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5, //
              spaceBetween: 30,
            },

            425: {
              slidesPerView: 2, //
              spaceBetween: 30,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          {data.length > 0 &&
            data?.map((elem) => {
              return (
                <SwiperSlide key={elem.id} className="card">
                  <div className="flex flex-col max-w-[270px]">
                    <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 pb-12 w-full rounded bg-white">
                      <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
                        <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
                          {100 -
                            Math.round(
                              (elem.price * 100) / (elem.price * 1.4)
                            )}{" "}
                          %
                        </div>
                        <img
                          loading="lazy"
                          srcSet={
                            import.meta.env.VITE_APP_FILE_URL + elem.image
                          }
                          className="object-contain self-end mt-3 max-w-full aspect-[1.13] w-[172px]"
                        />
                      </div>
                      <div className="flex flex-col">
                        <Checkbox
                          checked={wishlist.includes(elem.id)}
                          {...label}
                          onClick={() => handleWishClick(elem.id)}
                           
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain mt-2 aspect-square w-[34px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
                      <div className="self-stretch text-black">
                        {elem.productName}
                      </div>
                      <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
                        <div className="text-red-500">${elem.price}</div>
                        <div className="text-black opacity-50 line-through">
                          ${elem.price * 1.4}
                        </div>
                      </div>
                      <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                          className="object-contain shrink-0 aspect-[5] w-[100px]"
                        />
                        <div className="w-8 opacity-50">({elem.quantity})</div>
                        <button
                          onClick={() => handleClick(elem.id)}
                          className="buttonCard w-[85%] h-[5svh] text-white text-[20px] rounded-md bg-black absolute bottom-28 right-6 hidden"
                        >
                          Add To Card
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>

        <Button
          variant="contained"
          sx={{
            background: "red",
            ":hover": { background: "#ff0000c7" },
            marginY: "50px",
          }}
        >
          View All Products
        </Button>
      </div>

      <div className="flex flex-col">
        <div className="w-full min-h-0 border border-black border-solid max-md:max-w-full" />
        <div className="flex flex-col mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 items-end max-md:max-w-full">
            <div className="flex flex-col min-w-[240px]">
              <div className="flex gap-4 items-center self-start">
                <div className="flex flex-col self-stretch my-auto w-5">
                  <div className="flex shrink-0 h-10 bg-red-500 rounded" />
                </div>
                <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                  Categories
                </div>
              </div>
              <Link
                to="/category"
                className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black"
              >
                Browse By Category
              </Link>
            </div>
            <div className="flex gap-2 items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain shrink-0 aspect-square w-[46px]"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-contain shrink-0 aspect-square w-[46px]"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-8 items-start mt-8 text-base justify-between text-black whitespace-nowrap max-md:max-w-full">
            {category?.slice(0, 6).map((elem) => {
              return (
                <Link
                  to={`/category/${elem.id}`}
                  key={elem.id}
                  className="flex overflow-hidden   hover:bg-red-500 flex-col items-center px-9 py-6 rounded border border-solid border-black border-opacity-30 w-[170px] max-md:px-5"
                >
                  <img
                    loading="lazy"
                    src={import.meta.env.VITE_APP_FILE_URL + elem.categoryImage}
                    className="object-contain w-full aspect-square"
                  />
                  <div className="mt-4">{elem.categoryName}</div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-16 w-full min-h-0 border border-black border-solid max-md:mt-10 max-md:max-w-full" />
      </div>

      <div>
        <div className="flex flex-wrap gap-10 justify-between my-20 items-end">
          <div className="flex flex-col min-w-[240px]">
            <div className="flex gap-4 items-center self-start">
              <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                This Month
              </div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black">
              Best Selling Products
            </div>
          </div>
          <Link to="/category">
            <Button
              sx={{
                height: "50px",
                background: "red",
                ":hover": { background: "red" },
                color: "white",
              }}
            >
              View All
            </Button>
          </Link>
        </div>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          breakpoints={{
            670: {
              slidesPerView: 3, //
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5, //
              spaceBetween: 30,
            },

            425: {
              slidesPerView: 2, //
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          {data.length > 0 &&
            data?.map((elem) => {
              if (elem.price > 1500) {
                return (
                  <SwiperSlide key={elem.id} className="card">
                    <div className="flex flex-col max-w-[270px]">
                      0
                      <Link to={`/productbyID/${elem.id}`}>
                        <div className="flex overflow-hidden gap-1 items-start px-3 pt-3 pb-12 w-full rounded bg-white">
                          <div className="flex flex-col text-xs whitespace-nowrap text-neutral-50">
                            <div className="gap-2.5 self-start px-3 py-1 bg-red-500 rounded">
                              -40%
                            </div>
                            <img
                              loading="lazy"
                              srcSet={
                                import.meta.env.VITE_APP_FILE_URL + elem.image
                              }
                              className="object-contain self-end mt-3 max-w-full aspect-[1.13] w-[172px]"
                            />
                          </div>
                          <div className="flex flex-col">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                              className="object-contain aspect-square w-[34px]"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                              className="object-contain mt-2 aspect-square w-[34px]"
                            />
                          </div>
                        </div>
                      </Link>
                      <div className="flex flex-col items-start self-start mt-4 text-base font-medium">
                        <Link to={`/productbyID/${elem.id}`}>
                          <div className="self-stretch text-black">
                            {elem.productName}
                          </div>
                          <div className="flex gap-3 items-start mt-2 whitespace-nowrap">
                            <div className="text-red-500">${elem.price}</div>
                            <div className="text-black opacity-50 line-through">
                              ${elem.price * 1.4}
                            </div>
                          </div>
                          <div className="flex gap-2 items-start mt-2 text-sm font-semibold text-black whitespace-nowrap">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f79bd71a6471f38d5d1fc5e45c151fa99346fc4a5342fd2b25d87f1e68ade395?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                              className="object-contain shrink-0 aspect-[5] w-[100px]"
                            />
                            <div className="w-8 opacity-50">
                              ({elem.quantity})
                            </div>
                          </div>
                        </Link>
                        <button
                          onClick={() => handleClick(elem.id)}
                          className="buttonCard w-[85%] h-[5svh] text-white text-[20px] rounded-md bg-black absolute bottom-28 right-6 hidden"
                        >
                          Add To Card
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
        </Swiper>
      </div>

      <Timer2 />

      <div className="flex flex-wrap gap-10 justify-between my-20 items-end">
        <div className="flex flex-col min-w-[240px]">
          <div className="flex gap-4 items-center self-start">
            <div className="flex flex-col self-stretch my-auto w-5">
              <div className="flex shrink-0 h-10 bg-red-500 rounded" />
            </div>
            <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
              Our Products
            </div>
          </div>
          <div className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black">
            Explore Our Products
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-2 gap-10 my-20">
        {data.length > 0 &&
          data?.slice(0, 8).map((elem) => {
            return (
              <Section3
                key={elem.id}
                productName={elem.productName}
                price={elem.price}
                quantity={elem.quantity}
                id={elem.id}
                image={import.meta.env.VITE_APP_FILE_URL + elem.image}
                
              />
            );
          })}

        <Button
          variant="contained"
          sx={{
            color: "white",
            background: "red",
            ":hover": { background: "red" },
          }}
        >
          View All Products
        </Button>
      </div>

      <div className="flex flex-wrap gap-10 justify-between my-20 items-end">
        <div className="flex flex-col min-w-[240px]">
          <div className="flex gap-4 items-center self-start">
            <div className="flex flex-col self-stretch my-auto w-5">
              <div className="flex shrink-0 h-10 bg-red-500 rounded" />
            </div>
            <div className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
              Featured
            </div>
          </div>
          <div className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black">
            New Arrival
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-start">
        <div className="flex overflow-hidden flex-col px-7 pt-24 bg-black rounded min-w-[240px] w-[600px] max-md:px-5 max-md:max-w-full">
          <div className="flex relative flex-col items-start px-1 pt-96 pb-8 min-h-[511px] max-md:pt-24 max-md:pr-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/356eb40e5d7e64b86b2269636f88fdea0ab0a48cb527ce75779a42b2025215b4?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col max-w-full w-[242px]">
              <div className="flex flex-col w-full text-neutral-50">
                <div className="text-2xl font-semibold tracking-wider leading-none">
                  PlayStation 5
                </div>
                <div className="mt-4 text-sm leading-5">
                  Black and White version of the PS5 coming out on sale.
                </div>
              </div>
              <div className="flex flex-col mt-4 text-base font-medium text-white w-[81px]">
                <div>Shop Now</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40742fe053a27fd4ae0fe98d17023b98e0458d4b6c382de755fc8952018a510?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain w-full aspect-[83.33]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center min-w-[240px] w-[700px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-end px-14 max-w-full rounded bg-stone-950 w-[570px] max-md:pl-5">
            <div className="flex relative flex-col items-start pt-36 pb-6 w-full min-h-[284px] max-md:pt-24 max-md:pr-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e33d37a1666f10b390f706b387e24897866354f8b6b9cc858e31c7653baf58ee?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative flex-col max-w-full w-[255px]">
                <div className="flex flex-col w-full text-neutral-50">
                  <div className="text-2xl font-semibold tracking-wider leading-none">
                    Women’s Collections
                  </div>
                  <div className="mt-4 text-sm leading-5">
                    Featured woman collections that give you another vibe.
                  </div>
                </div>
                <div className="flex flex-col mt-4 text-base font-medium text-white w-[81px]">
                  <div>Shop Now</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40742fe053a27fd4ae0fe98d17023b98e0458d4b6c382de755fc8952018a510?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                    className="object-contain w-full aspect-[83.33]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center mt-8 max-md:max-w-full">
            <img
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd14a0254cde2445aa7bd717877bf0d9f02fd97493b14449389d5f89692807ba?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain self-stretch my-auto aspect-[0.95] min-w-[240px] w-[270px]"
            />
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8fd45d9d63f1953012be0e5236b9d6d8fb1536fbe32738bf8554edd4ce3a4dc2?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
              className="object-contain self-stretch my-auto aspect-[0.95] min-w-[240px] w-[270px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center py-16 my-40 text-black">
        <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/29cd0702940bd174e272e1abad821e1991dc2ae00698cebb37599a574d68a926?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col items-center mt-6">
            <div className="text-xl font-semibold leading-snug">
              FREE AND FAST DELIVERY
            </div>
            <div className="mt-2 text-sm text-center">
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch my-auto min-w-[240px] w-[262px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/687827b7e4cc572eb53e535f023d4699db9d907eb9ab9baeae77ac01f47b0f3a?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col items-center mt-6">
            <div className="text-xl font-semibold leading-snug">
              24/7 CUSTOMER SERVICE
            </div>
            <div className="mt-2 text-sm">Friendly 24/7 customer support</div>
          </div>
        </div>
        <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/86391599d833b9fb760da5c893ff964ef893ef0eacd7c0f7b8f30060620036af?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
            className="object-contain w-20 aspect-square"
          />
          <div className="flex flex-col items-center mt-6">
            <div className="text-xl font-semibold leading-snug">
              MONEY BACK GUARANTEE
            </div>
            <div className="mt-2 text-sm">We reurn money within 30 days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
