import {icons,test1,test2,test3,test4,test5,test6,test7,test8,test9,test10} from "./img/root_img";
import { connect } from 'react-redux';
import { updateUserDetail,showError } from "./Action/Action";
import { useState,useEffect } from 'react'
const url="https://forkify-api.herokuapp.com/api/v2/recipes";
const key="c28a0d26-8d77-4966-bbe3-02b80f4a7fc6";



function LeftContacs (props) {

const onClick=async(id,e)=>{
        e.preventDefault();
        try {await fetch(`${url}/${id}?key=${key}`)
        .then(item=>item.json()).then(res=>props.updateUserDetail(res.data.recipe))
        } catch (error) {props.showError(error)}
}

 useEffect(() => {
    setCurrentPage(1)
}, [props.Reducer.datam]); 


const increment=()=>{if(currentPage<pageNumbers.length){setCurrentPage(currentPage+1)}}
const decrease=()=>{ if(currentPage>1){setCurrentPage(currentPage-1)}}
const pageNumbers = [];
const [currentPage, setCurrentPage] = useState(1);
const indexOfLastPost = currentPage * 10;
const indexOfFirstPost = indexOfLastPost - 10;
const currentPosts = props.Reducer.datam.slice(indexOfFirstPost, indexOfLastPost);
for (let i = 1; i <= Math.ceil(props.Reducer.datam.length / 10); i++) {
    pageNumbers.push(i);} 

    return (
    <>
        <div className="results">
        <ul className="results__list">
           {currentPosts && currentPosts.map((item,i)=>{

             return  ( <li onClick={onClick.bind(this,item.id)} key={i}   >
                    <a className="results__link " href={"#123456"+i}>
                        <figure className="results__fig">
                            <img src={item.image_url} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">{item.title}</h4>
                            <p className="results__author">{item.publisher}</p>
                        </div>
                    </a>
                </li>)

            })} 
                 <div style={{display:props.Reducer.datam?"none":"block"}}>
                <li>
                    <a className="results__link results__link--active" href="#23456">
                        <figure className="results__fig">
                            <img src={test1} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Pasta with Tomato ...</h4>
                            <p className="results__author">The Pioneer Woman</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a className="results__link" href="#76767">
                        <figure className="results__fig">
                            <img src={test2} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Pasta Salad with ...</h4>
                            <p className="results__author">Spicy Perspective</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a className="results__link" href="#85354">
                        <figure className="results__fig">
                            <img src={test3} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Homemade Tomato ...</h4>
                            <p className="results__author">All Recipes</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a className="results__link" href="#43563">
                        <figure className="results__fig">
                            <img src={test4} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Pasta with Tomato ...</h4>
                            <p className="results__author">The Pioneer Woman</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a className="results__link" href="#2256665">
                        <figure className="results__fig">
                            <img src={test5} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Greek Pasta with ...</h4>
                            <p className="results__author">Chow</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a className="results__link" href="#7567567">
                        <figure className="results__fig">
                            <img src={test9} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Cherry tomato, kale ...</h4>
                            <p className="results__author">BBC Good Food</p>
                        </div>
                    </a>
                </li> 

                <li>
                    <a className="results__link" href="#5676577">
                        <figure className="results__fig">
                            <img src={test7} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Pasta with Fresh ...</h4>
                            <p className="results__author">Chow</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a className="results__link" href="#98798">
                        <figure className="results__fig">
                            <img src={test8} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Buttery Tomato Pasta ...</h4>
                            <p className="results__author">Simply Recipes</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="results__link" href="#5464646456">
                        <figure className="results__fig">
                            <img src={test10} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Pesto Pasta Salad ...</h4>
                            <p className="results__author">Eats Well With Others</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a className="results__link" href="#345345435">
                        <figure className="results__fig">
                            <img src={test6} alt="Test"/>
                        </figure>
                        <div className="results__data">
                            <h4 className="results__name">Pasta with Roasted ...</h4>
                            <p className="results__author">Two Peas and Their Pod</p>
                        </div>
                    </a>
                </li>
                </div>
            </ul> 
            
              <div className="results__pages" >
                
                <button className="btn-inline results__btn--prev" onClick={decrease}>
                    <span >&laquo;</span>
                </button>
                
                <div className="btn-inline1" >
                    <span >{currentPage+"/"+pageNumbers.length}</span>
                </div>
              
                <button className="btn-inline results__btn--next" onClick={increment}>
                    <span>&raquo;</span>
                </button>
                
            </div> 
        </div></>
  )
}


const mapStateToProps = (state) =>{return state}
const mapDispatchToProps = {updateUserDetail,showError}
export default connect(mapStateToProps,mapDispatchToProps)(LeftContacs)
