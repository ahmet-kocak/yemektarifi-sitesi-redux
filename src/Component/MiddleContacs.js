import React,{useState,useEffect} from 'react'
import { FiMinus,FiPlus } from "react-icons/fi"
import { connect } from 'react-redux'
import { updateUserDetail,showError,recipeLove,deleteUser } from './Action/Action'
import RightContacs from './RightContacs'
import { detail } from './Reducer/Reducer'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";


 function MiddleContacs(props) {
 const newDetail=props.Reducer.datamDetail;
 const [first, setfirst] = useState(0)
 const [second, setsecond] = useState(false)
 const [thirt, setthirt] = useState()
 const [love, setlove] = useState(false)
 
useEffect(() => {
 setsecond(false);
 setfirst(newDetail.servings);
 if(props.Reducer.love&&props.Reducer.love.find(item=>item.image_url==newDetail.image_url)){setlove(true)}else{setlove(false)}
}, [newDetail.id])


 const result=(first/newDetail.servings)
 const decrease=()=>{if(first>0){setfirst(first-1)}}
 const increment=()=>{setfirst(first+1)}
 const recipeLove=()=>{
    if(love){props.deleteUser(newDetail);setlove(false)}else{
    if(props.Reducer.love&&props.Reducer.love.find(item=>item.image_url==newDetail.image_url)){setlove(true)}else{props.recipeLove(newDetail);setlove(true)}
    }}
 useEffect(() => {
   if(props.Reducer.love.length==0) {setlove(false)}
 }, [props.Reducer.love.length])
 
    return (<>
    <div className="recipe">
    <figure className="recipe__fig">
        <img src={newDetail.image_url} alt="Tomato" className="recipe__img"/>
        <h1 className="recipe__title">
            <span>{newDetail.title}</span>
        </h1>
    </figure>
    <div className="recipe__details">
        <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">{newDetail.cooking_time}</span>
            <span className="recipe__info-text"> minutes</span>
        </div>
        <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">{first}</span>
            <span className="recipe__info-text"> servings</span>

            <div className="recipe__info-buttons">
            <button onClick={decrease} className="btn-tiny" id="eks" style={{marginRight:"5px"}}>
            <FiMinus style={{background:"orange",borderRadius:"9px"}}/></button>
            <button onClick={increment} className="btn-tiny" id="art">
            <FiPlus style={{background:"orange",borderRadius:"9px"}}/></button>
            </div>

        </div>
        <button className="recipe__love" onClick={recipeLove}>
          
           {love?<FcLike/>:<FcLikePlaceholder/>}
        </button>
    </div>



    <div className="recipe__ingredients">
        <ul className="recipe__ingredient-list">
            {newDetail.ingredients&&newDetail.ingredients.map((item,i)=>{

                return (
                <li className="recipe__item" key={i}>
                <svg className="recipe__icon">
                    <use href="img/icons.svg#icon-check"></use>
                </svg>
                <div className="recipe__count">{item.quantity&&(item.quantity*result).toFixed(2)}</div>
                <div className="recipe__ingredient">
                    <span className="recipe__unit">{item.unit} </span>
                    {item.description}
                </div>
            </li>)

            })}
            

        </ul>

        <button onClick={()=>{return (setsecond(!second),setthirt(newDetail.ingredients))}} id="sepet" className="btn-small recipe__btn">
            <svg className="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>Add to shopping list</span>
        </button>
      </div>
        
        <div className="recipe__directions">
        <h2 className="heading-2">How to cook it</h2>
        <p className="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span className="recipe__by">The Pioneer Woman</span>. Please check out directions at their website.
        </p>
        <a className="btn-small recipe__btn" href={newDetail.source_url} target="_blank">
            <span>Directions</span>
            <svg className="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>
        </a>
    </div>
    
    </div>
     <RightContacs newDetail={second?newDetail.ingredients:(thirt?thirt:detail.ingredients)} result={second?result:1} /> </>
  )
}


const mapStateToProps = (state) => {return state}
const mapDispatchToProps = {updateUserDetail,showError,recipeLove,deleteUser}
export default connect(mapStateToProps, mapDispatchToProps)(MiddleContacs)