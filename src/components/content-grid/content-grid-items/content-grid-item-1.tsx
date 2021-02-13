import * as data from '../../../mock.json';
const word:any = data.todo;

const ans = word.map((curElement: any, index: any) => {
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
            <p>{curElement.name} </p>
          </div>
          <div>
            <p>Status</p>
            <p className="high-priority">{curElement.status} </p>
          </div>
        </div>
      </div>
    )
});

export default ans;