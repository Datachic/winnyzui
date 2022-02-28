import styled from "styled-components";

export const NavCont = styled.nav`
  height: 5rem;
  display: none;
  ${'' /* display:flex; */}
  align-items: center;
  justify-content: center;
  background: #131921;
  position: sticky;
  top: 0;
  z-index: 100;
 

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
  
  }
  .header_logo {
  width: 100px;
  object-fit: contain;
  margin: 18px 20px 0 20px;
}
.header_search {
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
}
.header_searchInput {
  height: 15px;
  padding: 10px;
  border: none;
  width: 100%;
}
.header_searchIcon {
  background: #cd9042;
  padding: 5px;
  height: 20px !important;
}

.header_nav {
  display: flex;
  justify-content: space-evenly;
}
.header_option {
  display: flex;
  color: white;
  flex-direction: column;
  margin: 0 10px;
}

.header_optionLineOne {
  font-size: 8px;
}

.header_optionLineTwo {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1.3px;
}

.header_optionBasket {
  display: flex;
  align-items: center;
  color: white;
}
.qty {
  padding: 0 10px 0 5px;
  color: red;
  position: relative;
  /* top: -7px;
  right: 9px ;*/
}
a:link, a:visited {
  color: rgb(255, 255, 255);
  text-decoration: none;
  cursor: pointer;
  /* outline: none; */
}

a:link:active, a:visited:active {
  color: rgb(65, 121, 108);
}

`;

export const NavWrap= styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position:absolute;
  ${'' /* left:10%; */}
  z-index: 100;
  background:transparent;

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin: 0 30px 0-10px;
    }
  }
  ${'' /* .nav-center {
    width: 98vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
   */}
  .header_search {
  display: flex;
  flex: 1;
  align-items: center;
  margin: 0 0 0 3rem;
  
  }

 input.header_searchInput {
  height: 18px;
  padding: 10px;
  border-radius: 18px;
  width: 100%;
  border: 2px solid var(--clr-grey-9);
  }

  .header_searchIcon {
  background: #cd9042;
  position:relative;
  right:22px;
  top:-0.9px;
  padding: 5px;
  border-top-right-radius:9px;
  border-bottom-right-radius:9px;
  height: 21.5px;
  width:25px;
  opacity:0.6;
  
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      ${'' /* grid-template-columns: 0 1fr 0; */}
      align-items: center;
      justify-content: space-between;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.1rem;
        font-weight:bold;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export const Navbar= styled.nav`
  display: flex;
  height:6rem;
  align-items: center;
  position: relative;
  top: 0;
  z-index: 100;
  ${'' /* background: tan; */}

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
    .center{
      flex:1;
      display:flex;
    }
    .leftStf {
        display:flex;
        position:relative;
        ${'' /* right:10px; */}
        
      }
    
      .header_search {
      display: flex;
      flex: 1;
      align-items: center;
      ${'' /* margin: 0 0 0 3rem; */}
      
      }

      input.header_searchInput {

        height: 18px;
        padding: 10px;
        border-radius: 18px;
        width: 100%;
        border: 2px solid var(--clr-grey-9);
        }

        .header_searchIcon {
        background: #cd9042;
        position:relative;
        right:22px;
        top:-0.9px;
        padding: 5px;
        border-top-right-radius:9px;
        border-bottom-right-radius:9px;
        height: 21.5px;
        width:25px;
        opacity:0.6;
        
        }

        .nav-toggle {
          background: transparent;
          border: transparent;
          color: var(--clr-primary-5);
          cursor: pointer;
          svg {
            font-size: 2rem;
          }
        }
        .nav-links {
          display: none;
        }
        .cart-btn-wrapper {
          display: none;
        }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      ${'' /* grid-template-columns: 0 1fr 0; */}
      align-items: center;
      justify-content: space-between;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.1rem;
        font-weight:bold;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;


