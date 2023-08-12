// import { Component } from "react";
import styled from "styled-components"

//navigation style
const Nav = styled.div`
width: 100%;
height: 70px;
background-image: linear-gradient(170deg, #5B9A8B, #001C30);
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
`
// title container styling
const Title = styled.div`
width: 15%;
height: 50px;
display: flex;
align-items: center;
margin-left: 20px;
`
//title image
const TitleImage = styled.img`
width: 60px;
height: 60px
`
//title name
const TitleName = styled.span`
font-size: 30px;
color: #fff;
font-weight: 600;
font-family: sans-serif;
text-transform: uppercase;
text-shadow: 0px 0px 3px blue, 0px 0px 3px blue;
margin-left: 20px;
&:hover{color: grey};
`

//cart container styling
const CartContainer = styled.div`
position: relative;
cursor: pointer;
`
//cart image
const CartIcon = styled.img`
height: 48px;
margin-right: 20px;
`

//cart count
//change color using props by dynamic styling
const CartCount = styled.span`
background: ${(props) => props.color};
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right: 10px;
top: -5px;
font-size: 12px;
visibility: ${(props) => props.show?"visible":"hidden"};
`
// class Navbar extends Component{
    function Navbar(props){
    // render(){
        const {cartCount} = props;
        return(
            <>
            {/* type-1 inline style */}
                {/* <div style={{
                    width: "100%",
                    height: "70px",
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0"
                    }}>
                    <div style={{
                        width: "15%",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "15px"
                        }}>
                        <img src="https://cdn-icons-png.flaticon.com/128/777/777242.png" alt="title" style={{
                            width: "50px",
                            height: "50px"
                            }}/>
                        <span style={{
                            fontSize: "35px",
                            color: "white",
                            fontWeight: "600",
                            fontFamily: "sans-serif",
                            marginLeft: "10px"
                            }}>Movies</span>
                    </div>
                    <div >
                        <img alt="cart-icon"/>
                        <span>0</span>
                    </div>
                </div> */}

                {/* type-2 inline style using object */}
                {/* <div style={styles.nav}>
                    <div style={styles.title}>
                        <img src="https://cdn-icons-png.flaticon.com/128/777/777242.png" alt="title" style={styles.title.image}/>
                        <span style={styles.title.name}>Movies App</span>
                    </div>
                    <div style={styles.cartContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart-icon" style={styles.cartContainer.cartIcon}/>
                        <span style={styles.cartContainer.cartCount}>0</span>
                    </div>
                </div> */}

                {/* type-3 using tagname by installing style-components */}
                <Nav>
                    <Title>
                        <TitleImage src="https://cdn-icons-png.flaticon.com/128/777/777242.png" alt="title"/>
                        <TitleName>Movies App</TitleName>
                    </Title>
                    <CartContainer>
                        <CartIcon src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart-icon"/>
                        <CartCount color="yellow" show={true}>{cartCount}</CartCount>
                    </CartContainer>
                </Nav>
            </>
        )
    // }
}

export default Navbar;

//style object
// const styles = {
//     nav:{
//         width: "100%",
//         height: "70px",
//         backgroundColor: "#001C30",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px 0",
//     },
//     title:{
//         width: "15%",
//         height: "50px",
//         display: "flex",
//         alignItems: "center",
//         marginLeft: "20px",

//         image:{
//             width: "50px",
//             height: "50px"
//         },

//         name: {
//             fontSize: "30px",
//             color: "#fff",
//             fontWeight: "600",
//             fontFamily: "sans-serif",
//             textTransform: "uppercase",
//             textShadow: "0px 0px 3px blue, 0px 0px 3px blue",
//             marginLeft: "20px"
//         },
//     },
//     cartContainer: {
//         position: "relative",
//         cursor: "pointer",
//         cartIcon: {
//             height: "48px",
//             marginRight: "20px",
//         },

//         cartCount: {
//             background: "orange",
//             borderRadius: "50%",
//             padding: "4px 8px",
//             position: "absolute",
//             right: "10px",
//             top: "-5px",
//             fontSize: "12px"
//         }
//     }
// }