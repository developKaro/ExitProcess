var FinanceArray=[];
//var CurrentDate=new Date();

var FinanceCreateCount=1;
   FinanceArray=[{Items:"Cash/ traveler’s cheques/ Imprest",Type:'Received'},
            {Items:"Any other recoverable amount",Type:'Received'}]




function IntializeFinanceManagertable()
{
var Financehtml='';
	if(FinanceArray.length>0)
	{
		for(var i=0;i<FinanceArray.length;i++)
		{
		var Srno=parseInt([i])+1;
			 if(FinanceArray[i].Type=='Received')
			 {
			 Financehtml+='<tr>'+
			               '<td style="display:none"><p  id="FinanceOptionType'+Srno+'">Received</p></td>'+
							'<td >'+Srno+'</td>'+
							'<td><span id="FinanceItem'+Srno+'">'+FinanceArray[i].Items+'</span></td>'+
							'<td><input type="checkbox" class="" name="FinanceReceived'+Srno+'" value="Yes">Received</td>'+
							'<td> <input type="text" class="form-control" id="FinancetxtComments'+Srno+'" ></td>'+
							'<td> <input type="text" class="form-control" id="FinancetxtAmount'+Srno+'" ></td>'+
							'<td><div id="FinanceattachedFiles_'+Srno+'"></div>'+
							//'<input type="file" class="form-control" name="Financefile'+Srno+'" id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" "></td>'+
							'<div class="file form-control" name="Financefile'+Srno+'" id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" ">'+
						'<label class="file-label">'+
						'<input class="file-input" type="file" >'+
						'<span class="file-cta">'+
						'<span class="file-icon">'+
						'<i class="fas fa-upload"></i>'+
						'</span>'+
						'<span class="file-label">Choose a file…</span>'+
						'</span>'+
						'</label>'+
						'</div></td>'+


						'</tr>'
			 }
			 else
			 {
			 Financehtml+='<tr>'+
			                '<td style="display:none"><p  id="FinanceOptionType'+Srno+'">YesAndNo</p></td>'+
							'<td>'+Srno+'</td>'+
							'<td><span id="FinanceItem'+Srno+'">'+FinanceArray[i].Items+'</span></td>'+
							'<td>'+
								'<input type="radio" name="FinanceType'+Srno+'" value="Yes" onclick="Showhtmlforyes()">Yes '+
	                            '<input type="radio" name="FinanceType'+Srno+'" value="No" onclick="ShowhtmlforNo()"> NO'+
                            '</td>'+
							'<td> <input type="text" class="form-control" id="FinancetxtComments'+Srno+'" name="End Date"></td>'+
							'<td> <input type="text" class="form-control" id="FinancetxtAmount'+Srno+'" ></td>'+

							'<td><div id="FinanceattachedFiles_'+Srno+'"></div>'+
							//'<input type="file" class="form-control" name="Financefile'+Srno+'"  id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" ></td>'+
						'<div class="file form-control" name="Financefile'+Srno+'" id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" ">'+
						'<label class="file-label">'+
						'<input class="file-input" type="file" >'+
						'<span class="file-cta">'+
						'<span class="file-icon">'+
						'<i class="fas fa-upload"></i>'+
						'</span>'+
						'<span class="file-label">Choose a file…</span>'+
						'</span>'+
						'</label>'+
						'</div></td>'+

						'</tr>'

			 }
					}
		$('#FinancetbodyId').empty().append(Financehtml);
	}

}


/*GEt reporting manager detaisl*/


function GetFinanceitemDetailsSuccess(data)
{
ShowLoader();
$("#BSIPLoader").show()

var Financehtml='';
	if(data.length>0)
	{
		for(var i=0;i<data.length;i++)
		{
		var Srno=parseInt([i])+1;
			 if(data[i].OptionType=='Received')
			 {
			
			 Financehtml+='<tr>'+
			                '<td style="display:none"><p  id="FinanceOptionType'+Srno+'">Received</p></td>'+
                            '<td><p style="display:none" id="Financerequest'+Srno+'">'+data[i].Id+'</p>'+Srno+'</td>'+
							'<td><span id="FinanceItem'+Srno+'">'+data[i].Title+'</span></td>'+
							'<td><input type="checkbox" class="" name="FinanceReceived'+Srno+'" id="FinanceReceived'+Srno+'" ><p style="display:none" id="Financespan'+Srno+'">'+data[i].ReceiveOption+'</p> Received</td>'+
							'<td> <input type="text" value="'+data[i].Comments+'" class="form-control" id="FinancetxtComments'+Srno+'" ><p style="display:none" id="FinanceCurrentrow'+Srno+'">'+data[i].currentrowposition+'</p></td>'+
					    	'<td> <input type="text" value="'+data[i].ApplicableAmount+'" class="form-control" id="FinancetxtAmount'+Srno+'" ></td>'+

							'<td><div id="FinanceattachedFiles_'+Srno+'"></div>'+
							//'<input type="file" class="form-control" name="Financefile'+Srno+'" id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" "><p style="display:none" id="FinanceAttachment'+Srno+'">'+data[i].Attachments+'</p></td>'+
						'<div class="file form-control" name="Financefile'+Srno+'" id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" "><p style="display:none" id="FinanceAttachment'+Srno+'">'+data[i].Attachments+'</p>'+
						'<label class="file-label">'+
						'<input class="file-input" type="file" >'+
						'<span class="file-cta">'+
						'<span class="file-icon">'+
						'<i class="fas fa-upload"></i>'+
						'</span>'+
						'<span class="file-label">Choose a file…</span>'+
						'</span>'+
						'</label>'+
						'</div></td>'+

						'</tr>';
						
				 	
			 }
			 else
			 {
			 Financehtml+='<tr>'+
			                 '<td style="display:none"><p  id="FinanceOptionType'+Srno+'">YesAndNo</p></td>'+
							'<td><p style="display:none" id="Financerequest'+Srno+'">'+data[i].Id+'</p>'+Srno+'</td>'+
							'<td><span id="Item'+Srno+'">'+data[i].Title+'</span></td>'+
							'<td>'+
								'<input type="radio" name="FinanceType'+Srno+'" value="Yes" onclick="Showhtmlforyes()" >Yes '+
	                            '<input type="radio" name="FinanceType'+Srno+'" value="No" onclick="ShowhtmlforNo()"> NO'+
                            '</td>'+
							'<td><input type="text" value="'+data[i].Comments+'" class="form-control" id="FinancetxtComments'+Srno+'" ><p style="display:none" id="FinanceCurrentrow'+Srno+'">'+data[i].currentrowposition+'</p></td>'+
					    	'<td> <input type="text" value="'+data[i].ApplicableAmount+'" class="form-control" id="FinancetxtAmount'+Srno+'" ></td>'+

							'<td><div id="FinanceattachedFiles_'+Srno+'"></div>'+
							//'<input type="file" class="form-control" name="Financefile'+Srno+'" id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" "><p style="display:none" id="FinanceAttachment'+Srno+'">'+data[i].Attachments+'</p></td>'+
						'<div class="file form-control" name="Financefile'+Srno+'" id="FinanceFile_'+Srno+'" onClick="initAttachmentFinance(FinanceFile_'+Srno+')" "><p style="display:none" id="FinanceAttachment'+Srno+'">'+data[i].Attachments+'</p>'+
						'<label class="file-label">'+
						'<input class="file-input" type="file" >'+
						'<span class="file-cta">'+
						'<span class="file-icon">'+
						'<i class="fas fa-upload"></i>'+
						'</span>'+
						'<span class="file-label">Choose a file…</span>'+
						'</span>'+
						'</label>'+
						'</div></td>'+

						'</tr>'

			 }
			 
			
					}
		$('#FinancetbodyId').empty().append(Financehtml);
		
		BindCheckboxesFinance();
		// $('#Received1').prop('checked',true);

	}
	
	
	else{
IntializeFinanceManagertable();
}
HideLoader();
}

function GetFinanceitemDetailsFailure(){

}

function BindCheckboxesFinance()
{
          $('#FinancetbodyId tr').each(function()
				{
				    var currentrowposition=$(this).index()+1;
				    var Received=$('#Financespan'+currentrowposition).text().trim();
				    var Attachment=$('#FinanceAttachment'+currentrowposition).text().trim();
				    var itemId=$('#Financerequest'+currentrowposition).text();
				    var ApplicableAmount=$('#FinancetxtAmount'+currentrowposition).text();

				    var CurrentRow=$('#FinanceCurrentrow'+currentrowposition).text();
                    $('#hdnrowpositionFinance').val(CurrentRow);
                    if(Received=="true")
					{
					   $('#FinanceReceived'+currentrowposition).prop('checked',true);
					   }
				        if(Attachment)
						{
							GetAttachmentsforFinance($('#Financerequest'+currentrowposition).text(),GetAttachmentsFinanceSuccess,GetAttachmentsFinanceFailure);
						}
                    							
				});
				
				
			 if($('#hdnFinanceApprovalStatus').val()=='Approved')	
	      {
	        disableFinancetable();
	      }	

}


/*SAve HOD details*/


var FinanceRequestdata=new Array();
function AddFinanceItemsdetails()
{
ShowLoader();
$("#BSIPLoader").show()

				FinanceRequestdata.length=0;
				$('#FinancetbodyId tr').each(function()
				{
				    var currentrowposition=$(this).index()+1;
				    var Item=$('#FinanceItem'+currentrowposition).text().trim();
				    var OptionType=$('#FinanceOptionType'+currentrowposition).text().trim();
					var ReceiveOption=$("input[name='FinanceReceived"+currentrowposition+"']").is(":checked")!=''?true:false;
					var Comments=$('#FinancetxtComments'+currentrowposition).val().trim();
					var ApplicableAmount=$('#FinancetxtAmount'+currentrowposition).val().trim();

					var YESNOOption=$("input[name='FinanceType"+currentrowposition+"']:checked").is(":checked")!=''?true:false;
                    var FinanceId=$('#Financerequest'+currentrowposition).text()!=''?$('#Financerequest'+currentrowposition).text():null; 
					var E_ExitForm_ID=$('#hdnExitFormID').val().trim();
					//var OptionType='Received';
					var fileArray = [];  
                  $("#FinanceattachedFiles_"+currentrowposition+" span").each(function () {  
                  fileArray.push({ "Attachment": $(this).text()});  
                  });  
					
					var obj=new FinanceListEntity();
					obj.Title=Item;
					obj.ReceiveOption=ReceiveOption;
					obj.YESNOOption=YESNOOption;
					obj.Comments=Comments;
					obj.ApplicableAmount=ApplicableAmount;

					obj.Attachment=fileArray;
					obj.currentrowposition =$(this).index();
					obj.Id=FinanceId;
					obj.OptionType=OptionType;

	             FinanceRequestdata.push(obj);
		
				});
				SaveFinanceItemsdetails();
				//HideLoader();
				
}




var Attachement='';
function SaveFinanceItemsdetails()
{
if(FinanceRequestdata.length>0)
 {
   for(var i=0;i<FinanceRequestdata.length;i++)
	 {//Attachement='';
	  var FinanceRequestId=FinanceRequestdata[i].Id;
	  if(FinanceRequestId!=null && FinanceRequestId!='' && FinanceRequestId!=undefined)
	  {
	 	  UpdateFinanceManagerTtemDetails(FinanceRequestId,FinanceRequestdata[i],UpdateFinanceManagerTtemDetailsSuccess,UpdateFinanceManagerTtemDetailsFailure);
 
	  }
	  else
	  {
         CreateFinanceManagerTtemDetails(FinanceRequestdata[i],CreateFinanceManagerTtemDetailsSuccess,CreateFinanceManagerTtemDetailsFailure);
	  }
      
	 }
	 	// alert('Request Submitted Successfully');
   }
}




function CreateFinanceManagerTtemDetailsSuccess(data)
{
  var deferred = jQuery.Deferred();
  var Id=data.d.Id;
	Attachement = FinanceRequestdata[data.d.currentrowposition].Attachment;
	
	if(Attachement.length>0)
	{
	  SaveAttachmentitemforFinance(Attachement,Id);
	
	}
	if(FinanceRequestdata.length==FinanceCreateCount)
	{
	 if(IsCCCApproved)
	 {
	    if(CCCApproved)
	    {
		   var level=parseInt($('#hdnApprovalSequence').val())+1+1;
	        GetMApproversbyEntityforPrint(level,GetMApproversbyEntityforPrintSuccess,GetMApproversbyEntityforPrintFailure)
	    }
	    else
	    {
			var Subject='Request has been approved';
			var Status='Approved'
			var Body='Hi '+$('#txtEmpName').val()+',<br/>The request has been approved by '+_spPageContextInfo.userDisplayName+'(Finance) ' 
			SaveEEmailDetails(Subject,Body,Status);	
	    }
	 }
	 else
	 {
	 HideLoader();
     alert('Request submitted successfully');
location.reload();
	 }

	}
	else
	{
		FinanceCreateCount++;
	}

		 return deferred.promise(); 		
}

function CreateFinanceManagerTtemDetailsFailure()
{
HideLoader();
}

var Financefilecount=0;
var FinanceupdateCount=1;
function UpdateFinanceManagerTtemDetailsSuccess(data)
{

var	Attachement = FinanceRequestdata[Financefilecount].Attachment;
var Id	= FinanceRequestdata[Financefilecount].Id;

	if(Attachement.length>0)
	{
	  SaveAttachmentitemforFinance(Attachement,Id);
	
	}
	
	if(FinanceRequestdata.length==FinanceupdateCount)
	{

     if(IsFinanceApproved)
	 {
	    if(FinanceApproved)
	    {
		   var level=parseInt($('#hdnApprovalSequence').val())+1+1;
	        GetMApproversbyEntityforPrint(level,GetMApproversbyEntityforPrintSuccess,GetMApproversbyEntityforPrintFailure)
	    }
	    else
	    {
			var Subject='Request has been approved';
			var Status='Approved'
			var Body='Hi '+$('#txtEmpName').val()+',<br/>The request has been approved by '+_spPageContextInfo.userDisplayName+'(Finance) ' 
			SaveEEmailDetails(Subject,Body,Status);	
	    }
	 }
   else
	 {
	 HideLoader();
     alert('Request submitted successfully');
location.reload();
	 }

	
	}
	else
	{
		FinanceupdateCount++;
	}
	Financefilecount++;
	//return deferred.promise(); 	
}

function UpdateFinanceManagerTtemDetailsFailure()
{
HideLoader();
}

var IsFinanceApproved=false;
function ApproveFinanceItemsDetails()
{

	var isvalidated=true;
		if(isvalidated)
	{
	IsFinanceApproved=true;
	SaveExitformforFinanceDetails();
	}
	

}
function SaveExitformforFinanceDetails()
{
    ShowLoader();
	var ExitFormDetails =new ExitFormListEntity();
	ExitFormDetails.E_FinanceApprovedBy=_spPageContextInfo.userId;
	ExitFormDetails.E_FinanceApprovalOn=moment().format('YYYY-MM-DD');
	ExitFormDetails.E_FinanceApprovalStatus='Approved';
	
	UpdateExitformDetailsforFinance(ExitFormDetails, UpdateExitformDetailsforFinanceSuccess, UpdateExitformDetailsforFinanceFailure);  
  
}

function UpdateExitformDetailsforFinanceSuccess()
{
GetExitformDetailsforStatus(GetExitformDetailsforFinanceStatusSuccess,GetExitformDetailsforFinanceStatusFailure)
//AddFinanceItemsdetails();
HideLoader();
}
function UpdateExitformDetailsforFinanceFailure()
{
 HideLoader();
}

function GetExitformDetailsforFinanceStatusFailure(){}
function GetExitformDetailsforFinanceStatusSuccess(data)
{
	if(data.length>0)
	{
		UpdateExitformforApproval(UpdateExitformforFinanceApprovalSuccess,UpdateExitformforFinanceApprovalFailure)
	}
	else
	{
		AddFinanceItemsdetails();
	
	}
}

var FinanceApproved=false;
function UpdateExitformforFinanceApprovalSuccess()
{
FinanceApproved=true;
AddFinanceItemsdetails();

}

function UpdateExitformforFinanceApprovalFailure()
{
}





