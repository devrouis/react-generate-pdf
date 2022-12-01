import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import {  NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/dist/react-notifications.css";

import Pdf from "react-to-pdf";
import moment from 'moment';

import left_top_bg from '../assets/images/left_top_bg.png'
import right_top_bg from '../assets/images/right_top_bg.png'

// import "./styles.css";
const ref = React.createRef();

const PdfView = () => {

  const property = useSelector(state => state.property.properties)
  console.log('---PdfView.js---', property)
  const exportPdf = () => {
    window.print();
  }
  var index_num = 1;
  return (
    <div className="main">
      {property === null ? null :
        <div ref={ref} className="text-center mt-20">
          <img src={left_top_bg} className="ltop_bg" alt="left top bg"/>
          <img src={right_top_bg} className="rtop_bg" alt="right top bg" onClick={exportPdf}/>
          <div className="pdf_title">Peer-Review Report</div>
          <div className="text-left">
            <span>Date issued :</span> <span>{moment().format('MMMM Do YYYY')}</span>
          </div>
          <div className="text-left">
            <span>Manuscript title :</span> <span>{property.manuscript_title}</span>
          </div>
          <div className="text-left">
            <span>Submitted by :</span> <span>{ property.first_name}&nbsp;&nbsp;{property.last_name}</span>
          </div>
          <br />
          <br />
          <div className="text-left">
            <span>Dear Dr.</span> <span>{ property.first_name}&nbsp;&nbsp;{property.last_name}</span>
          </div>
          <br />
          <div className="text-left">
            We are pleased to inform you that your manuscript “<span>{ property.manuscript_title}</span>” has been accepted <br />
            for publication in the Medical Research Archives. Please review the following reviewer <br/>
            comments regarding any revisions which are requested. If possible, please submit the final <br/>
            version of your manuscript within 7 days so we may begin the copyediting process. You will <br/>
            receive a separate email with an invoice for the publication fee, which is also due prior to<br/>
            copyediting. If you have any questions for the reviewers or editor please do not hesitate to ask.
          </div>
          <br />
          <br />
          <div className="text-left">Sincerely</div>
          <br />
          <div className="text-left">Editorial Team</div>
          <div className="text-left">Media Research Archives</div>
          <br />
          <br />
          <br />
          <br />
          <div>
            {
              property.cbox_one === false ?
                null 
                :
                <div className="text-left mb-10">
                    {index_num++}.	Verify that all abbreviations are accompanied by the full term when first used, in both the abstract and the full text.
                </div>
            }

            {
              property.cbox_two === false ?
                null 
                :
                <div className="text-left mb-10">
                  <div>{index_num++}.	The English is not at the required level. Proofreading by a native English speaker is required.</div>
                  <div>Recommended medical manuscript English proofreading services:</div>
                  <div>•	Medical Journal Editors - <a href="https://www.medicaljournaleditors.com">https://www.medicaljournaleditors.com</a></div>
                  <div>•	Peak Medical Editing - <a href="https://www.peakmedicalediting.com ">https://www.peakmedicalediting.com </a></div>
                </div>  
            }

            {       
              property.cbox_three === false ?
                null 
                :
                <div className="text-left mb-10">
                  {index_num++}.	The reference section doesn’t meet AMA style requirements.<br />

                  <div className="mt-10"><b>AMA Style Guide</b></div>
                  <br />
                  AMA style reference lists are in numerical order, based on the order in which the sources were first cited in your assignment. Journal titles should be in italic font.
                  <br />
                  <br />
                  Example of an AMA style reference list:
                  <br />
                  <br />
                  REFERENCES
                  <br />
                  <br />
                  1.	Economopoulos KJ, Brockmeier SF. Rotator cuff tears in overhead athletes. Clin Sports Med. 2012;31(4):675-692.<br />
                  2.	Fikremariam D, Serafini M. Multidisciplinary approach to pain management. In: Vadivelu N, Urman RD, Hines RL, eds. Essentials of Pain Management. Springer; 2011:17-28. doi:10.1007/978-0-387-87579-8_2<br />
                  3.	Lenza M, Buchbinder R, Christensen R, Hanchard NCA, Faloppa F. Magnetic resonance imaging versus ultrasonography for assessing rotator cuff tears in patients with shoulder pain for whom surgery is being considered. Cochrane Database of Syst Rev. 2011;(3):CD009020. doi:10.1002/14651858.CD009020<br />
                  4.	Food safety fact sheet 51: food allergies. Queensland Health. March 2013. Accessed January 12, 2014. <a href="http://www.health.qld.gov.au/foodsafety/Documents/fs-51-allergies.pdf">http://www.health.qld.gov.au/foodsafety/Documents/fs-51-allergies.pdf</a><br />
                  5.	Shaparin N, Shah A, Gritsenko K. Pharmacological agents: opioids. In: Urman RD, Vadivelu N, eds. Perioperative Pain Management. Oxford University Press; 2013:29-37. Accessed November 25, 2012. <a href="http://jcu.eblib.com.au/patron/FullRecord.aspx?p=1274300">http://jcu.eblib.com.au/patron/FullRecord.aspx?p=1274300</a><br />
                </div>
            }
            
            {
              property.cbox_four === false ?
                null 
                :
                <div className="text-left mb-10">
                  {index_num++}.	The inline quoting numbers don't adhere to AMA style.<br />
                  <div className="mt-10"><b>How to use AMA style for inline quoting</b></div>
                  <br />
                  References should be numbered in consecutive order in the text, tables, or figures.
                  Use superscript numerals to cite material, e.g., 1    The first reference used in a written document is listed as 1 in the reference list.
                  Where to place the superscript?  The superscript number 1  is inserted into the document immediately next to the fact, concept, or quotation being cited.  If citing more than one reference at the same point, separate the numbers with commas and no spaces between. 
                  Example of AMA inline quoting:
                  Finding treatments for breast cancer is a major goal for scientists.1,2 Some classes of drugs show more promise than others. Gradishar evaluated taxanes as a class.3 Other scientists have investigated individual drugs within this class, including Andre and Zielinski 2 and Joensuu and Gligorov. 4 Mita et al's investigation of cabazitaxel 5 seems to indicate a new role for this class of drugs.
                </div>
            }

            {
              property.cbox_five === false ?
              null
              :
              <div className="text-left mb-10">
                {index_num++}.	The title could be more descriptive.
                <br />
                <div className="mt-10"><b>Manuscript Title Guidelines</b></div>
                <br />
                The title should be descriptive and give the reader a clear understanding of the topic of the manuscript. Avoid using abbreviations in the title.
                Case reports must contain the words “case report” or “case series” within the title.
                Manuscripts focusing on research limited to a specific geographical area should indicate such in the title.
              </div>
            }

            {
              property.cbox_six === false ?
                null
                :
                <div className="text-left mb-10">
                   {index_num++}.	The abstract is missing.<br />
                  <div className="mt-10"><b>Abstract Guidelines</b></div>
                  Abstracts may consist of no more than 350 words.
                  The aim of an abstract is to summarize the objectives and results of the article. Structured abstracts (including the following elements: Background, Aims, Methods, Results, and Conclusion) are permitted but not required. 
                  Abstracts should not contain references or excessive abbreviations. 
                </div>
            }

            {
              property.cbox_seven === false ?
                null
                :
                <div className="text-left mb-10">
                   {index_num++}.	The abstract does not provide a complete overview of the full text.
                  An abstract should provide readers a detailed overview of the topics to expect when reading the manuscript. 
                </div>
            }

            {
              property.cbox_eight === false ?
                null
                :
                <div className="text-left mb-10">
                   {index_num++}.	Avoid as much as possible the use of abbreviations in the abstract.
                </div>
            }

            {
              property.cbox_nine === false ?
                null
                :
                <div className="text-left mb-10">
                   {index_num++}.	The Introduction section is rather short. It is recommended to expand it to provide a better framework for the paper.
                  <br />
                  <div className="mt-10"><b>An introduction should: </b></div>
                  <br />
                  •	Provide background information that puts the manuscript into context and allows readers outside the field to understand its significance <br />
                  •	Clearly state the aim and scope of the article <br />
                  •	Define the problem addressed <br />
                  •	Note any relevant controversies or disagreements related to the topic <br />
                </div>

            }

            {
              property.cbox_ten === false ?
                null
                :
              <div className="text-left mb-10">
                 {index_num++}.	 The Methods section should be more detailed.
                The Methods section should be sufficiently detailed to allow other researchers to replicate the work. Sample size calculations, inclusion/exclusion criteria, study design and protocols, and data collection methods should be described if applicable.
              </div>
            }

            {
              property.cbox_eleven === false ?
                null
                :
                <div className="text-left mb-10">
                   {index_num++}.	 The study design was not described.
                  It is important to state and describe the study design. For example:<br />

                  •	Meta-Analysis.<br />
                  •	Systematic Review<br />
                  •	Randomized Controlled Trial<br />
                  •	Cohort Study (Prospective Observational Study)<br />
                  •	Case-control Study<br />
                  •	Cross-sectional study<br />
                  •	Case Reports and Series<br />
                </div>
            }

            {
              property.cbox_twelve === false ?
               null
               :
                <div className="text-left mb-10">
                   {index_num++}.	How was the sample calculated? Is it statistically significant? It is important to include this information in the paper.
                  <br />
                  <div className="mt-10"><b>Sample Size Analysis Guide</b></div>
                  <br />
                  Sample size calculation serves two important functions. First, it aims to estimate a minimum sample size that can be sufficient for achieving a target level of accuracy in an estimate for a specific population parameter. Second, it aims to determine the level of statistical significance {`(i.e. P-value < 0.05)`} attained by these desired effect sizes.
                  A free online sample size calculator and guide may be found at <a href="https://www.qualtrics.com/blog/calculating-sample-size/">https://www.qualtrics.com/blog/calculating-sample-size/</a> 
                </div>
            }

            {
              property.cbox_thirteen === false ?
                null 
                :
                <div className="text-left mb-10">
                   {index_num++}.	The aim and scope are not clearly stated. It is important to state the objective of the paper.
                  Within the first couple minutes of reading a manuscript, a reader should be able to determine the following:
                  <br />
                  •	What is the objective of this manuscript?
                  <br />
                  •	What kind of study design was used?
                  <br />
                  •	Why are the results of this study important?
                  <br />
                </div>
            }

            {
              property.cbox_fourteen === false ?
                null 
                :
                <div className="text-left mb-10">
                   {index_num++}.	It is necessary to add a brief conclusion section.
                  <br />
                  <div className="mt-10"><b>Importance of a conclusion section</b></div>
                  <br />
                  
                  Conclusions are often seen as unnecessary since they only restate what has already been stated. However, a good conclusion should go beyond repeating what was said. The final section of a paper should inform the reader how everything they have read is relevant to them and why it should matter. A conclusion is not just a summary of the points mentioned in the paper but also “a synthesis of key points.” Since conclusions are expected to be concise, one paragraph should be sufficient most of the time.
                </div>
            }

            {
              property.cbox_fifteen === false ?
                null 
                :
                <div className="text-left mb-10">
                   {index_num++}.	The discussion section seems too short considering the topic complexity. It is recommended to expand it.
                  <br />
                  <div className="mt-10"><b>Keys to a good discussion section</b></div>
                  <br />
                  The purpose of the discussion is to interpret and describe the significance of your findings in light of what was already known about the research problem being investigated, and to explain any new understanding or fresh insights about the problem after you've taken the findings into consideration. The discussion will always connect to the introduction by way of the research questions or hypotheses you posed and the literature you reviewed, but it does not simply repeat or rearrange the introduction; the discussion should always explain how your study has moved the reader's understanding of the research problem forward from where you left them at the end of the introduction.
                  </div> 
            }
            {/* <div className='text-left'><b>Comments</b></div> */}
            {
              property && property.comments && property.comments.length > 0 && property.comments.map((item, key) => (
                <div className="mt-10" key={key}>
                  <div className='text-left'>
                      {index_num++}.{item.text}
                  </div>
                </div>
              ))
            }
          </div>
           
        </div>
        }
        {/* <Pdf targetRef={ref} filename="contract.pdf">
          {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Download Pdf</button>}
        </Pdf> */}
        <NotificationContainer />
      </div>
  );
};

export default PdfView;