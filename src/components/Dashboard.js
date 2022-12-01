import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {  NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/dist/react-notifications.css";

import { connect } from 'react-redux';

import {setProperty} from '../actions/property';

import Select from 'react-select';

const options = [
  { value: 'Accepted', label: 'Accepted' },
  { value: 'Revisions Required', label: 'Revisions Required' },
  { value: 'Rejected', label: 'Rejected' },
];

const Dashboard = ({setProperty}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    manuscript_title:'',
    editorial_decision:'Accepted',
    cbox_one :false,
    cbox_two :false,
    cbox_three :false,
    cbox_four :false,
    cbox_five :false,
    cbox_six :false,
    cbox_seven :false,
    cbox_eight :false,
    cbox_nine :false,
    cbox_ten :false,
    cbox_eleven :false,
    cbox_twelve :false,
    cbox_thirteen :false,
    cbox_fourteen :false,
    cbox_fifteen :false,
    comments: [{index:'', text:''}]
  });

  const onChange = (e) =>{
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const onCheckChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  }

  const { first_name, 
    last_name,  
    manuscript_title, 
    editorial_decision,
    cbox_one,
    cbox_two,
    cbox_three,
    cbox_four,
    cbox_five,
    cbox_six,
    cbox_seven,
    cbox_eight,
    cbox_nine,
    cbox_ten,
    cbox_eleven,
    cbox_twelve,
    cbox_thirteen,
    cbox_fourteen,
    cbox_fifteen,
    comments } = formData;

  const pdfView = () => {
    console.log(formData)
    setProperty(formData, navigate);
  }

  const addComment = () => {
    const { comments } = formData;
    if(comments.length > 5 ){
      NotificationManager.error('Maximum comments count less than 6', 5000);
    }
    else {
      console.log(comments)
      var data = {index:'', text:''}
      comments.push(data);
      setFormData({ ...formData, comments: comments });
    }
  }

  const handleValueChange = (index, value) => {
    const { comments } = formData;
    comments[index]['text'] = value;
    setFormData({ ...formData, comments: comments });
    // setData(tmp)
  }

  const commentList = comments.map((item, index) => (
    <div className="flex mb-10" key={index}>
      <div className="flex items-center m-auto ">
        <span>{index + 1}.</span>&nbsp;&nbsp;&nbsp;
        <input className="comment_box" name="value" type="text" value={item.text} onChange={(e)=>handleValueChange(index, e.target.value)} />
      </div>
    </div>
  ));


  return (
    <div className="main">
      <div className="header">
        <div className="title text-center">MRA Peer-review Report Generator</div>
        <table className="w-100 mt-30">
          <thead>
            <tr>
              <th><label htmlFor="first_name">Author First Name:</label></th>
              <th><input type="text" id="first_name" name="first_name" value={first_name} onChange={onChange} /></th>
              <th><label htmlFor="manuscript_title">Manuscript Title:</label></th>
              <th><input type="text" id="manuscript_title" name="manuscript_title" value={manuscript_title} onChange={onChange} /></th>
            </tr>
            <tr>
              <th><label htmlFor="last_name">Author Last Name:</label></th>
              <th><input type="text" id="last_name" name="last_name" value={last_name} onChange={onChange} /></th>
              <th><label htmlFor="editorial_descision">Editorial Descision:</label></th>
              <th>
              <select className="select_custom" name="editorial_decision" value={editorial_decision} onChange={onChange}>
                <option value="Accepted">Accepted</option>
                <option value="Revisions Required">Revisions Required</option>
                <option value="Rejected">Rejected</option>
              </select>
              </th>
              {/* <th><input type="text" id="editorial_decision" name="editorial_decision" value={editorial_decision} onChange={onChange} /></th> */}
            </tr>
          </thead>
        </table>
      </div>
      <div className="content mt-10">
        <div className="left">
          <div className="header_title">Standard Comments</div>
          <div>
            <div className="sub_title">Language and Formatting</div>
            <div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label1" htmlFor="blogs_name">The inline quoting numbers don't adhere to AMA style.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_one" name="cbox_one" value={cbox_one} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The reference section doesn’t meet AMA style requirements.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_two" name="cbox_two" value={cbox_two} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The English is not at the required level. Proofreading by a native English speaker is required.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_three" name="cbox_three" value={cbox_three} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">Verify that all abbreviations are accompanied by the full term when first used in both, the abstract and the full text.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_four" name="cbox_four" value={cbox_four} onChange={onCheckChange} />
              </div>
            </div>
          </div>
          
          <div>
            <div className="sub_title">Title, Abstract, and Introduction</div>
            <div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The title could be more descriptive.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_five" name="cbox_five" value={cbox_five} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The abstract is missing.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_six" name="cbox_six" value={cbox_six} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The abstract does not provide a complete overview of the full text.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_seven" name="cbox_seven" value={cbox_seven} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">  
                <label className="cbox_label" htmlFor="blogs_name">Avoid as much as possible the use of abbreviations in the abstract.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_eight" name="cbox_eight" value={cbox_eight} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">  
                <label className="cbox_label" htmlFor="blogs_name">The Introduction section is rather short. It is recommended to expand it to provide a better framework for the paper.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_nine" name="cbox_nine" value={cbox_nine} onChange={onCheckChange} />
              </div>
            </div>
          </div>

          <div>
            <div className="sub_title">Methods</div>
            <div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The Methods section should be more detailed.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_ten" name="cbox_ten" value={cbox_ten} onChange={onCheckChange} />
              </div>  
              <div className="flex justify-between items-center text-left">  
                <label className="cbox_label" htmlFor="blogs_name">The study design was not described.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_eleven" name="cbox_eleven" value={cbox_eleven} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">  
                <label className="cbox_label" htmlFor="blogs_name">How was the sample calculated? Is it statistically significant? It is important to include this information in the paper</label>
                <input type="checkbox" className="checkbox_size" id="cbox_twelve" name="cbox_twelve" value={cbox_twelve} onChange={onCheckChange} />
              </div>
            </div>
          </div>

          <div>
            <div className="sub_title">General</div>
            <div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The aim and scope are not clearly stated. It is important to state the objective of the paper.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_thirteen" name="cbox_thirteen" value={cbox_thirteen} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">It is necessary to add a brief conclusion section.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_fourteen" name="cbox_fourteen" value={cbox_fourteen} onChange={onCheckChange} />
              </div>
              <div className="flex justify-between items-center text-left">
                <label className="cbox_label" htmlFor="blogs_name">The discussion section seems too short considering the topic complexity. It is recommended to expand it.</label>
                <input type="checkbox" className="checkbox_size" id="cbox_fifteen" name="cbox_fifteen" value={cbox_fifteen} onChange={onCheckChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div>Custom Comments</div>
           {commentList }
        <button className='btn btn-primary' onClick={() => addComment()}>
          Add new comment
        </button>
        </div>
      </div>
      <div>
        <button className='btn btn-primary' onClick={() => pdfView()}>
          PdfView
        </button>
      </div>
      <NotificationContainer />
    </div>
      
  );
};

Dashboard.propTypes = {
  setProperty: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  property: state.property
});

export default connect(mapStateToProps, { setProperty })(Dashboard);