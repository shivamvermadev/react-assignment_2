import * as data from '../../../mock.json';
import User from '../../../images/user_1.svg';
const word1: any = data.inprogress;

const ans2 = word1.map((curElement: any, index: any) => {
    return (
        <div className="card box-shadow" key={index}>
            <div className="card-inner-data">
                <div className="py-2"> ID: {curElement.id} </div>
                <div className="py-2 primary-light">{curElement.date} </div>
            </div>
            <h3>{curElement.heading}</h3>
            <p className="primary-light"> {curElement.p}</p>
            <div className="card-inner-data">
                <div>
                    <p>Assignee</p>
                    <div className="card-inner-data-image">
                        <img src={User} alt="" />
                        <p>{curElement.name} </p>
                    </div>
                </div>
                <div>
                    <p>Status</p>
                    <p className="in-progress">{curElement.status} </p>
                </div>
            </div>
        </div>
    )
});


export default ans2;