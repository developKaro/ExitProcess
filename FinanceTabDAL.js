/*Get Reporting Manager*/
var FinanceListName='E_Finance';

function FinanceListEntity() 
{
this.Id
,this.Title
,this.ReceiveOption
,this.YESNOOption
,this.ApplicableAmount
,this.Comments
,this.ApplicableAmount
,this.E_ExitForm_ID
,this.Attachment
,this.currentrowposition 
,this.OptionType
,this.currentrowposition

}



function CreateFinanceManagerTtemDetails(RequestDetails, Success, Failure)
{
var ExitId=$('#hdnExitFormID').val();
 var deferred= jQuery.Deferred();
  var itemType = GetItemTypeForListName(FinanceListName);
	var item = {
        '__metadata': { 'type': itemType },
        
			'Title': RequestDetails.Title,
			'ReceiveOption': RequestDetails.ReceiveOption,
			'YESNOOption': RequestDetails.YESNOOption,
			'ApplicableAmount': RequestDetails.ApplicableAmount,
			'Comments': RequestDetails.Comments,
			'E_ExitForm_IDId': ExitId,
            'currentrowposition':RequestDetails.currentrowposition,
            'OptionType': RequestDetails.OptionType,

		
        };
 	 createListItemSync(FinanceListName, WebAbsoluteUrl, item, Success, Failure);
 return deferred.promise();
}



function UpdateFinanceManagerTtemDetails(ItemId,FinanceFormDetails, Success, Failure)
{
var ExitId=$('#hdnExitFormID').val();
 var deferred= jQuery.Deferred();
  var itemType = GetItemTypeForListName(FinanceListName);
	var item = {
        '__metadata': { 'type': itemType },
        
			'Title': FinanceFormDetails.Title,
			'ReceiveOption': FinanceFormDetails.ReceiveOption,
			'YESNOOption': FinanceFormDetails.YESNOOption,
			'ApplicableAmount': FinanceFormDetails.ApplicableAmount,
			'Comments': FinanceFormDetails.Comments,
			'currentrowposition':FinanceFormDetails.currentrowposition,
			'OptionType': FinanceFormDetails.OptionType,
			'E_ExitForm_IDId': ExitId,

		
        };
 	 updateListItemSync(ItemId,FinanceListName, WebAbsoluteUrl, item, Success, Failure);
 return deferred.promise();
}


/*GEt Repoting MAnager*/
function GetFinanceitemDetails(Success,Failure)
{
var ExitId=$('#hdnExitFormID').val();
	SelectQuery = "?$select=Id,Title,ReceiveOption,YESNOOption,ApplicableAmount,Comments,currentrowposition,E_ExitForm_ID/ID,Attachments,OptionType" 
	,expandQuery= "&$expand=E_ExitForm_ID/ID"
	,filterQuery="&$filter=E_ExitForm_ID/ID eq "+ExitId
   ,OrderByQuery= "&$OrderBy=currentrowposition asc"
	 var tempQuery = SelectQuery +expandQuery +filterQuery+OrderByQuery;
	 	var requestQuery = requestURL.format(WebAbsoluteUrl, FinanceListName, tempQuery);
getListItemByQuery(requestQuery, onFillFinanceItems, Success, Failure);

}

function onFillFinanceItems(data,Success,Failure)
{
	if (!(!data)) {
        var stringData = JSON.stringify(data);
        var jsonObject = JSON.parse(stringData);
        var coll= new Array();
		for (var i = 0; i < jsonObject.d.results.length; i++) {
        	coll[i] = FillFinanceItemsDetails(jsonObject.d.results[i]);
		}
		Success(coll);
	}

}


function FillFinanceItemsDetails(result)
{
var objFinanceListEntity= new FinanceListEntity();

  objFinanceListEntity.Id = result.Id;
  objFinanceListEntity.Attachments= result.Attachments;

if (result.Title != null) {
    objFinanceListEntity.Title = result.Title
} else {
    objFinanceListEntity.Title = '';
}
if (result.ReceiveOption != null) {
    objFinanceListEntity.ReceiveOption = result.ReceiveOption
} else {
    objFinanceListEntity.ReceiveOption = '';
}
if (result.YESNOOption != null) {
    objFinanceListEntity.YESNOOption = result.YESNOOption
} else {
    objFinanceListEntity.YESNOOption = '';
}
if (result.ApplicableAmount != null) {
    objFinanceListEntity.ApplicableAmount = result.ApplicableAmount
} else {
    objFinanceListEntity.ApplicableAmount = '';
}
if (result.Comments != null) {
    objFinanceListEntity.Comments = result.Comments
} else {
    objFinanceListEntity.Comments = '';
}
if (result.E_ExitForm_ID != null) {
    objFinanceListEntity.E_ExitForm_ID = result.E_ExitForm_ID
} else {
    objFinanceListEntity.E_ExitForm_ID = '';
}
if (result.OptionType!= null)
 {
    objFinanceListEntity.OptionType= result.OptionType
} 
else 
{
    objFinanceListEntity.OptionType= '';
}
if (result.currentrowposition != null)
 {
    objFinanceListEntity.currentrowposition = result.currentrowposition 
} 
else 
{
    objFinanceListEntity.currentrowposition = '';
}

return objFinanceListEntity; 

}

/*Notice Period*/



function FinanceAttachmentsListEntity() {
	this.Filename
	,this.Fileurl
}


function GetAttachmentsforFinance(listitemid,Success,Failure)
{
	var requestQuery = 	WebAbsoluteUrl+"/_api/lists/getByTitle('"+FinanceListName+"')/items("+listitemid+")?$select=AttachmentFiles/ServerRelativeUrl,AttachmentFiles/FileName&$expand=AttachmentFiles/ServerRelativeUrl,AttachmentFiles/FileName";
	getListItemByQuerysync(requestQuery, onFillGetFinanceAttachments, Success, Failure);

}

function onFillGetFinanceAttachments(data,Success,Failure)
{
	
	if (!(!data)) {
        var stringData = JSON.stringify(data);
        var jsonObject = JSON.parse(stringData);
        var collGetAttachments= new Array();
		for (var i = 0; i < jsonObject.d.AttachmentFiles.results.length; i++) {
        	collGetAttachments[i] = FillGetFinanceAttachments(jsonObject.d.AttachmentFiles.results[i]);
		}
		Success(collGetAttachments);
	}

}
function FillGetFinanceAttachments(result)
{
	var objGetAttachments = new FinanceAttachmentsListEntity();
	objGetAttachments.Filename  = result.FileName;
	objGetAttachments.Fileurl  = window.location.origin+result.ServerRelativeUrl;
	return objGetAttachments;
}


function UpdateExitformDetailsforFinance(ExitFormDetails, Success, Failure)
{
var itemId=$('#hdnExitFormID').val().trim();
  var itemType = GetItemTypeForListName(ExitFormListName);
	var item = {
        '__metadata': { 'type': itemType },
        
		'E_FinanceApprovedById': ExitFormDetails.E_FinanceApprovedBy,
		'E_FinanceApprovalOn': ExitFormDetails.E_FinanceApprovalOn,
		'E_FinanceApprovalStatus': ExitFormDetails.E_FinanceApprovalStatus,
		
        };
 	 updateListItem(itemId,ExitFormListName, WebAbsoluteUrl, item, Success, Failure);

}






