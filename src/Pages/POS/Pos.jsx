import React from 'react'
import './pos.css'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState, useEffect } from 'react';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SettingsSuggestIcon from '@mui/icons-material/Timeline';
import AddProducts from './Add Products/AddProducts';
import CollectionManage from './Collection Manger/CollectionManage'

function Pos() {

    // to handle fullscreen
    const handle = useFullScreenHandle();
    let fullScreen = handle.active
    // console.log(fullScreen)
    // to genreate random gradient css color
    function genRGB() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r},${g},${b})`;
    };

    function returnGradient() {
        let deg = Math.floor(Math.random() * 360);
        return `linear-gradient(${deg}deg,${genRGB()},${genRGB()},${genRGB()})`
    };




    let gradient = []


    const loop = [
        {
            id: 1,
            img: 'https://img.freepik.com/free-vector/realistic-white-plate-isolated_1284-41743.jpg?w=740&t=st=1666867036~exp=1666867636~hmac=5d293f5101aea3658c0495761a3284f0d81cfde2cc8a11c2177a455ec926dbd7',
            name: 'All Items',
            amount: '1000 Items'
        },
        {
            id: 2,
            img: 'https://img.freepik.com/free-photo/yummy-soya-pulao-pilav-pulav-rice-soyabean-chunk-fried-rice-with-peas-beans-indian-pakistani-cuisine_466689-75173.jpg?w=360&t=st=1666868563~exp=1666869163~hmac=7557c6a307ee3665a6a54aafc275debb8d096982390b89f9a51d7664c493bf41',
            name: 'Biriyani',
            amount: '10 Items'
        },
        {
            id: 3,
            img: 'https://img.freepik.com/free-photo/sandwich_1339-1108.jpg?w=900&t=st=1666868633~exp=1666869233~hmac=92161a924be7825321b30d62e43b5fc4e8feb048b4a260c2ba310fcb5b538c89',
            name: 'Snakes',
            amount: '70 Items'
        },
        {
            id: 4,
            img: 'https://img.freepik.com/premium-photo/fresh-tasty-pizza-white-background_211889-151.jpg?size=626&ext=jpg&uid=R81208765&ga=GA1.2.537173976.1661925856',
            name: 'Chicken',
            amount: '50 Items'
        },
        {
            id: 5,
            img: 'https://as1.ftcdn.net/v2/jpg/03/07/65/18/1000_F_307651812_yiydVwvUeeZlTCuUs4E2aqsUMUlwIo86.jpg',
            name: 'vegetarian pizza',
            amount: '20 Items'
        },
        {
            id: 6,
            img: 'https://t4.ftcdn.net/jpg/02/69/95/79/240_F_269957972_KlbQ4PPSpnCdXLN8h1H1xHQC52kqL37W.webp',
            name: 'Meals',
            amount: '30 Items'
        },
        {
            id: 7,
            img: 'https://as2.ftcdn.net/v2/jpg/05/38/80/67/1000_F_538806779_BDkTgnH2wr8YnaieDdMTe2md7LcIEFa5.jpg',
            name: 'delicious ham ',
            amount: '50 Items'
        },
        {
            id: 8,
            img: 'https://as1.ftcdn.net/v2/jpg/05/40/15/66/1000_F_540156640_SLsXJRII0bX6Z6icKxRgHcFzZlH42fbD.webp',
            name: 'mayonnaise ',
            amount: '10 Items'
        },
        {
            id: 9,
            img: 'https://as2.ftcdn.net/v2/jpg/02/18/10/57/1000_F_218105790_dtVLUJIy1aBWC1PMOLcF0J4lxI1abpL4.jpg',
            name: 'Apple Isolated',
            amount: '90 Items'
        },
        {
            id: 10,
            img: 'https://t3.ftcdn.net/jpg/00/91/58/34/240_F_91583461_gz7RNIxFPHD9So1f7KkUkEXAXIJN2utZ.jpg',
            name: ' hamburger ',
            amount: '400 Items'
        }

    ]

    loop.map((i, val) => {
        // returnGradient()
        return (
            i.gradient = returnGradient()
        )
    })

    // card products
    const products = [
        {
            id: 1,
            img: 'https://img.freepik.com/free-photo/trending-viral-feta-bake-pasta-recipe_2829-20321.jpg',
            price: '300',
            name: ' feta bake',
            category: 'Snakes'
        },
        {
            id: 2,
            img: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1666942353~exp=1666942953~hmac=43c5cb8e41387f400c82395c834950ea9078bbe406c924f43a01d0ab8ff87c9c",
            price: '200',
            name: 'skewers',
            category: 'Snakes'
        },
        {
            id: 3,
            img: 'https://img.freepik.com/premium-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-background_2829-4750.jpg',
            price: '300',
            name: 'dhal spicy',
            category: 'Snakes'
        },
        {
            id: 4,
            img: 'https://img.freepik.com/premium-photo/american-hot-cheese-sandwich-homemade-grilled-cheese-sandwich-breakfast_2829-3521.jpg',
            price: '200',
            name: 'sandwich',
            category: 'Snakes'
        },
        {
            id: 5,
            img: 'https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74294.jpg?w=826&t=st=1666937773~exp=1666938373~hmac=ab93599c68474c5bd147d103070f64162c48366e0a3c28da0e7b26044e916832',
            price: '500',
            name: "Misal pav",
            category: 'Snakes'
        },
        {
            id: 6,
            img: 'https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=826&t=st=1666941826~exp=1666942426~hmac=0db3839b58b92d52920b8a495755fae631d00f2a74ba4a9008b26cc064fa0c1f',
            price: '200',
            name: 'chicken biryani',
            category: 'Snakes'
        },
        {
            id: 7,
            img: 'https://img.freepik.com/free-photo/group-indian-tea-time-snacks-samosa-kachori-aloo-bonda-onion-pakora-moong-vada-chilli-fritter-etc_466689-72720.jpg?w=826&t=st=1666941911~exp=1666942511~hmac=ec8dee0286c64dda531d6cc88d56b23bacd73e903710a92268f8879dd6d64bfd',
            price: '100',
            name: 'snacks',
            category: 'Biriyani'
        },
        {
            id: 8,
            img: 'https://img.freepik.com/free-photo/cooked-plain-white-basmati-rice-steamed-rice-bowl_466689-74907.jpg?w=826&t=st=1666941955~exp=1666942555~hmac=658fc7c6618a7f17dcc89495832aab873f9441223217aa996b37a689e598eb99',
            price: '400',
            name: 'basmati rice',
            category: 'Biriyani'
        },
        {
            id: 9,
            img: 'https://img.freepik.com/premium-photo/aloo-potol-dalna-recipe-is-traditional-sabzi-from-bengal-made-with-potato-pointed-gourd_466689-86443.jpg',
            price: '200',
            name: 'Aloo potol',
            category: 'Biriyani'
        },
        {
            id: 10,
            img: 'https://img.freepik.com/free-photo/roast-chicken-liver-with-vegetables_2829-8399.jpg',
            price: '400',
            name: 'Roast chicken',
            category: 'Biriyani'
        },
        {
            id: 11,
            img: "https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8576.jpg",
            price: '100',
            name: 'Penne pasta',
            category: 'Biriyani'
        },
        {
            id: 12,
            img: 'https://img.freepik.com/free-photo/sausages-grill-pan-wooden-table_2829-20090.jpg',
            price: '200',
            name: 'Sausages',
            category: 'Biriyani'
        },
        {
            id: 13,
            img: 'https://img.freepik.com/free-photo/pita-stuffed-with-chicken-peppers_2829-17827.jpg',
            price: '100',
            name: 'Pita stuffed',
            category: 'Biriyani'
        },
        {
            id: 14,
            img: 'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg',
            price: '200',
            name: 'Baked chicken',
            category: 'Chicken'
        },
        {
            id: 15,
            img: 'https://img.freepik.com/premium-photo/tomato-rice-with-vegetables-chicken-healthy-food-healthy-lifestyle_2829-21413.jpg',
            price: '200',
            name: 'Tomato rice',
            category: 'Chicken'
        },
        {
            id: 16,
            img: 'https://img.freepik.com/free-photo/trending-viral-feta-bake-pasta-recipe_2829-20321.jpg',
            price: '300',
            name: ' feta bake',
            category: 'Chicken'
        },
        {
            id: 17,
            img: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1666942353~exp=1666942953~hmac=43c5cb8e41387f400c82395c834950ea9078bbe406c924f43a01d0ab8ff87c9c",
            price: '200',
            name: 'skewers',
            category: 'Chicken'
        },
        {
            id: 18,
            img: 'https://img.freepik.com/premium-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-background_2829-4750.jpg',
            price: '300',
            name: 'dhal spicy',
            category: 'Chicken'
        },
        {
            id: 19,
            img: 'https://img.freepik.com/premium-photo/american-hot-cheese-sandwich-homemade-grilled-cheese-sandwich-breakfast_2829-3521.jpg',
            price: '200',
            name: 'sandwich',
            category: 'Chicken'
        },
    ]

    // carousel controller
    const settings = {
        infinite: false,
        speed: 100,
        slidesToShow: 6,
        slidesToScroll: 2,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // controllers for modal and cart dds
    const [open, setOpen] = React.useState(false);
    const [posCount, setPosCount] = useState(1)
    const [addons, setAddons] = useState('')
    const [cart, setCart] = useState([])
    const [posModal, setPosModal] = useState({
        id: '',
        name: '',
        img: '',
        price: ''
    })

    let priceArr = []
    let price
    let subTotal = 0
    let tax
    let discount
    let total


    const handleClose = () => {
        setOpen(false)
        setTimeout(() => setPosCount(1), 500)
        setTimeout(() => setAddons(), 500)
    }


    // modal close while clicking window
    const modalRef = useRef();
    useEffect(() => {
        window.onclick = (e) => {
            // console.log(e)
            if (e.target.contains(modalRef.current)) {
                // console.log('inside ref')
                handleClose()
            }
            else {
                // console.log('outside the ref')
            }
        }
    }, [])

    let cartItems = []
    const handleCart = (i, name, price, addons, posCount) => {
        cartItems.push({
            id: i,
            name: name,
            price: price,
            addons: addons,
            quantity: posCount
        })
        console.log(cartItems)
        cartItems.push(...cart) //logic for saving previous values in cart
        setCart(cartItems)
        handleClose()
    }
    // let sum = 0
    // function to find percentage
    function percentage(num, per) {
        return (num / 100) * per;
    }

    cart.map((i) => {
        // quantity x rate
        price = Number(i.price) * Number(i.quantity)
        priceArr.push(price)

        // to find subTotal
        subTotal = priceArr.reduce((a, b) => a + b, 0)

        // to find tax
        tax = percentage(10, subTotal)
        discount = percentage(8, subTotal)
        console.log(tax)

        // to find grand total
        total = (subTotal + tax) - discount
    })


    // posFilter function
    useEffect(() => {
        setFilteredProducts(products)
    }, [])

    const [filteredProducts, setFilteredProducts] = useState([])

    const handleFilter = (i) => {
        console.log(i)
        let filterProducts
        if (i != 'All Items') {
            filterProducts = products.filter((items) => {
                return items.category === i
            })
            console.log(filterProducts)
            setFilteredProducts(filterProducts)
        }
        else if (i = '') {
            setFilteredProducts('')
        }
        else {
            setFilteredProducts(products)
        }
    }

    // console.log(filteredProducts)


    // manage sidebar
    const [posHome, setPosHome] = useState(true)
    const [addProduct, setAddProduct] = useState(false)
    const [collectionManagment, setCollectionManagment] = useState(false)
    const [purchaseHistory, setPurchaseHistory] = useState(false)

    // modal style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        height: 350,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
    };

    return (
        <div className='dashboardcontainer'>
            <FullScreen handle={handle} >
                <div className="pos-item1">

                    <div className="pos-header">
                        <h3>Point On Sale</h3>
                        <div className="pos-buttons">
                            {fullScreen ? (
                                <button onClick={handle.exit} >
                                    <FullscreenExitIcon />
                                </button>
                            ) : (
                                <button onClick={handle.enter}>
                                    <FullscreenIcon />
                                </button>)}
                        </div>
                    </div>

                    {/* pos body */}


                    <div className="pos-category">
                        <div className={fullScreen ? 'small-sidebar' : 'small-sidebar-noZoom'}>
                            <button className={posHome ? 'small-sidebar-btn-active' : 'small-sidebar-btn'} onClick={() => { setAddProduct(false); setPosHome(true); setCollectionManagment(false); setPurchaseHistory(false) }}><StoreIcon /></button>
                            <button className={addProduct ? 'small-sidebar-btn-active' : 'small-sidebar-btn'} onClick={() => { setAddProduct(true); setPosHome(false); setCollectionManagment(false); setPurchaseHistory(false) }}><ControlPointIcon /></button>
                            <button className={collectionManagment ? 'small-sidebar-btn-active' : 'small-sidebar-btn'} onClick={() => { setAddProduct(false); setPosHome(false); setCollectionManagment(true); setPurchaseHistory(false) }}><CategoryIcon /></button>
                            <button className={purchaseHistory ? 'small-sidebar-btn-active' : 'small-sidebar-btn'} onClick={() => { setAddProduct(false); setPosHome(false); setCollectionManagment(false); setPurchaseHistory(true) }}><SettingsSuggestIcon /></button>
                        </div>
                    </div>


                    {/* demo */}

                    {
                        posHome ?
                            <>
                                <div className="pos-container">
                                    <div className="pos-body">
                                        <h4>Categories</h4>
                                        <Slider {...settings}>
                                            {
                                                loop.map((i, val) => {
                                                    return (
                                                        <div className="pos-category-cards" key={i} onClick={() => handleFilter(i.name)}>
                                                            <div><img src={i.img} alt="" /></div>
                                                            <div className="category-main-item">
                                                                {i.name}
                                                            </div>
                                                            <div className="category-sub-item" >
                                                                {i.amount}
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Slider>

                                        <h4 style={{ marginBottom: '1rem' }}>Special Menu for you</h4>
                                        <div className="pos-cards">
                                            {filteredProducts != ''
                                                ?
                                                filteredProducts.map((i, val) => {
                                                    return (
                                                        <div className="pos-cards-items" key={val}>
                                                            <img src={i.img} alt="" />
                                                            <div className="pos-cards-details">
                                                                <div className="pos-cards-details-left">
                                                                    <p>{i.name}</p>
                                                                    <p>&#8377; {i.price}</p>
                                                                </div>
                                                                <div className="pos-cards-details-right">
                                                                    <button onClick={() => { setOpen(true); console.log(open); setPosModal({ id: i.id, name: i.name, img: i.img, price: i.price }) }}>+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                <p style={{ fontSize: '15px' }}>No Items Found!</p>
                                            }
                                            {/* <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                                timeout: 500,
                                            }}
                                        >
                                            <Fade in={open}>
                                                <Box sx={style}> */}
                                            <div className={open ? 'pos_modal_container' : 'pos_modal_container_none'} ref={modalRef}>
                                                <div className="pos_modal">
                                                    <div className="pos_modal_img">
                                                        <img src={posModal.img} alt="" />
                                                    </div>
                                                    <div className="pos_modal_details">
                                                        <p>{posModal.name}</p>
                                                        <p>	&#8377; {posModal.price}</p>
                                                    </div>
                                                    <div className="pos_modal_actions">
                                                        <select name="addons" id="addons" onChange={e => setAddons(e.target.value)}>
                                                            <option value="addons">Addons</option>
                                                            <option value="extra">Extra Pickels</option>
                                                            <option value="add salad">Add salad</option>
                                                            <option value="mionise">Mionise</option>
                                                        </select>

                                                        <div className="pos_modal_actions_counter">
                                                            <button onClick={() => setPosCount((posCount != 0) && (posCount != 1) ? posCount - 1 : posCount)}>-</button>
                                                            <p>{posCount}</p>
                                                            <button onClick={(() => setPosCount(posCount + 1))}>+</button>
                                                        </div>
                                                    </div>

                                                    <div className="pos_modal_actions_button">
                                                        <button onClick={() => handleCart(posModal.id, posModal.name, posModal.price, addons, posCount)}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </Box>
                                            </Fade>
                                        </Modal> */}
                                        </div>

                                    </div>
                                    <div className={fullScreen ? 'pos-sidebar' : 'pos-sidebar-noZoom'}>

                                        <h4>Order Details</h4>

                                        <div className="pos-order-details">
                                            <div className="personal-details">
                                                <p>Order ID : #42JQ279A8IW</p>
                                                <p>Mon, Oct 16, 2022, 12:00</p>
                                                <p>#0820220010</p>
                                            </div>

                                            <div className="item-details">
                                                {/* <div className="item-details-row">
                                                <p>{cart.name}</p>
                                                <p>&#8377; {cart.price}</p>
                                            </div> */}
                                                {/* <div className="item-details-row">
                                                <p>Basmati rice</p>
                                                <p>&#8377; 390</p>
                                            </div>
                                            <div className="item-details-row">
                                                <p>Feta bake</p>
                                                <p>&#8377; 390</p>
                                            </div>
                                            <div className="item-details-row">
                                                <p>Roast chicken</p>
                                                <p>&#8377; 390</p>
                                            </div> */}

                                                {
                                                    cart.map((i, val) => {
                                                        console.log(i)
                                                        return (
                                                            <div className="item-details-row">
                                                                <p>{i.name}</p>
                                                                <p>{i.quantity}</p>
                                                                <p>{i.price}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {/* {setSubTotal(sum)} */}

                                                <div className="item-addons">
                                                    {
                                                        cart.map((i, val) => {
                                                            return (
                                                                <p>{i.addons}</p>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="item-total-row">
                                                    <p>Subtotal</p>
                                                    <p>&#8377; {subTotal}</p>
                                                </div>

                                                <div className="item-total-row">
                                                    <p>Tax(10%)</p>
                                                    <p>&#8377; {tax}</p>
                                                </div>
                                                <div className="item-total-row">
                                                    <p>Discount(8%)</p>
                                                    <p>&#8377; {discount}</p>
                                                </div>

                                                <div className="pos-item-total">
                                                    <p>Total</p>
                                                    <p>&#8377; {total}/-</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            : ''
                    }

                    {
                        addProduct ?
                            <div className="pos-container">
                                <div className="pos-sec-body">
                                    <p>Add products</p>
                                    <AddProducts />
                                </div>
                            </div>
                            : ''
                    }
                    {
                        collectionManagment ?
                            <div className="pos-container">
                                <div className="pos-sec-body">
                                   <CollectionManage />
                                </div>
                            </div>
                            : ''
                    }

                    {
                        purchaseHistory ?
                            <div className="pos-container">
                                <div className="pos-sec-body">
                                    <p>Purchase History</p>
                                </div>
                            </div>
                            : ''
                    }




                </div>
            </FullScreen >
        </div >
    )
}

export default Pos