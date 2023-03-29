import React from 'react';

// function GameCard(props){
//     console.log(props);
//     console.log(props?.params?.name);
//     return(
//         //   <div className="col-md-4">
//         //     <div className="card">
//         //       {/* <img className="card-img-top" src={props.params.img} alt="Card cap" /> */}
//         //       <div className="card-body">
//         //         <h5 className="card-title" style={{color: "red"}}>{props.params.name}</h5>
//         //         <br />
//         //         <a href={props.params.link} className="btn btn-danger">Play Now</a>
//         //       </div>
//         //     </div>
//         //   </div>
//         <span>OK</span>
//     )
// };

function GameCard(props) {
    return (
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={props.params.img} alt="Card cap" />

          <div className="card-body">
            <h5 className="card-title" style={{color: "red"}}>{props.params.name}</h5>
            <br />
            <a href={props.params.link} className="btn btn-danger">Play Now</a>
          </div>
        </div>
      </div>
    );
  }


export default GameCard;