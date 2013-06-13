var automationframework = connect('localhost:27017/automationframework');

var ClickID = ObjectId();
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"ID","possiblevalues":[],"parametertype":"String","id":"1361857038191-12505-27095"},{"name":"ID Type","possiblevalues":["ID","XPath","Class Name","Tag Name","Css Selector","Link Text","Partial Link Text","Name"],"parametertype":"String","id":"1361857045292-1778-6378"}],"name":"Click","description":"","type":"script","status":"Automated","_id":ClickID,"collection":[],"script":"actions.selenium.Click.run","project":projectName});
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"URL","possiblevalues":[],"parametertype":"String","id":"1361857291996-19836-917"},{"name":"Browser","possiblevalues":["Internet Explorer","Firefox","Chrome"],"parametertype":"String","id":"1361857319350-22783-32022"}],"name":"Open Browser","description":"","type":"script","status":"Automated","_id":ObjectId("512c4b3f281b8c041a00000e"),"collection":[],"script":"actions.selenium.Browser.run","project":projectName});
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"ID","possiblevalues":[],"parametertype":"String","id":"1361859197536-31667-17007"},{"name":"ID Type","possiblevalues":["ID","XPath","Class Name","Tag Name","Css Selector","Link Text","Partial Link Text","Name"],"parametertype":"String","id":"1361859201529-30055-7133"},{"name":"Keys","possiblevalues":[],"parametertype":"String","id":"1361859371895-8512-9793"}],"name":"Send Keys","description":"","type":"script","status":"Automated","_id":ObjectId("512c52e3281b8c041a000028"),"collection":[],"script":"actions.selenium.SendKeys.run","project":projectName});
automationframework.actions.save({"tag":["google"],"params":[{"name":"search for","possiblevalues":[],"parametertype":"String","id":"1361857485948-2237-13684"}],"name":"Search Google","description":"","type":"collection","status":"Automated","_id":ObjectId("512c4b95281b8c041a00000f"),"collection":[{"order":"1","actionid":"512c52e3281b8c041a000028","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361859197536-31667-17007","paramvalue":"q"},{"paramname":"ID Type","paramid":"1361859201529-30055-7133","paramvalue":"Name"},{"paramname":"Keys","paramid":"1361859371895-8512-9793","paramvalue":"${search for}"}]},{"order":"2","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"btnK"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"Name"}]}],"script":"","project":projectName});
automationframework.actions.save({"tag":["selenium"],"params":[{"name":"ID","possiblevalues":[],"parametertype":"String","id":"1361900718349-8440-28310"},{"name":"IDType","possiblevalues":["ID","XPath","Class Name","Tag Name","Css Selector","Link Text","Partial Link Text","Name"],"parametertype":"String","id":"1361900724396-8476-16304"},{"name":"Text","possiblevalues":[],"parametertype":"String","id":"1361900791173-11855-8017"}],"name":"Verify Text","description":"","type":"script","status":"Automated","_id":ObjectId("512cf4fd281b8c041a00003e"),"collection":[],"script":"actions.selenium.VerifyText.run","project":projectName});
automationframework.actions.save({"tag":["amazon","search"],"params":[{"name":"search for","possiblevalues":[],"parametertype":"String","id":"1361901171879-59-24985"}],"name":"Search Amazon","description":"","type":"collection","status":"Automated","_id":ObjectId("512cf672281b8c041a00003f"),"collection":[{"order":"1","actionid":"512c52e3281b8c041a000028","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361859197536-31667-17007","paramvalue":"twotabsearchtextbox"},{"paramname":"ID Type","paramid":"1361859201529-30055-7133","paramvalue":"ID"},{"paramname":"Keys","paramid":"1361859371895-8512-9793","paramvalue":"${search for}"}]},{"order":"2","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"nav-submit-input"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"Class Name"}]}],"script":"","project":projectName});
automationframework.actions.save({"tag":["amazon"],"params":[{"name":"Item Index","possiblevalues":[],"parametertype":"String","id":"1361902537334-29436-6570"}],"name":"Select Item","description":"","type":"collection","status":"Automated","_id":ObjectId("512cf72b281b8c041a000043"),"collection":[{"order":"1","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"//*[@id=\"result_${Item Index}\"]/h3/a"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"XPath"}]}],"script":"","project":projectName});
automationframework.actions.save({"tag":["amazon","cart"],"params":[],"name":"Add to Cart","description":"","type":"collection","status":"Automated","_id":ObjectId("512cf76f281b8c041a000044"),"collection":[{"order":"1","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"bb_atc_button"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"ID"}]}],"script":"","project":projectName});
automationframework.actions.save({"tag":["amazon","cart"],"params":[],"name":"Verify Item Added to Cart","description":"","type":"collection","status":"Automated","_id":ObjectId("512cf7a3281b8c041a000045"),"collection":[{"order":"1","actionid":"512cf4fd281b8c041a00003e","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361900718349-8440-28310","paramvalue":"confirm-text"},{"paramname":"IDType","paramid":"1361900724396-8476-16304","paramvalue":"ID"},{"paramname":"Text","paramid":"1361900791173-11855-8017","paramvalue":"1 item added to Cart"}]}],"script":"","project":projectName});
automationframework.actions.save({"tag":[],"params":[],"name":"test","description":"","type":"script","status":"To be Automated","collection":[{"order":"1","actionid":ClickID.toString(),"host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361857038191-12505-27095","paramvalue":"<NULL>"},{"paramname":"ID Type","paramid":"1361857045292-1778-6378","paramvalue":"<NULL>"}]},{"order":"2","actionid":"512c52e3281b8c041a000028","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361859197536-31667-17007","paramvalue":"<NULL>"},{"paramname":"ID Type","paramid":"1361859201529-30055-7133","paramvalue":"<NULL>"},{"paramname":"Keys","paramid":"1361859371895-8512-9793","paramvalue":"<NULL>"}]},{"order":"3","actionid":"512cf4fd281b8c041a00003e","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"ID","paramid":"1361900718349-8440-28310","paramvalue":"<NULL>"},{"paramname":"IDType","paramid":"1361900724396-8476-16304","paramvalue":"<NULL>"},{"paramname":"Text","paramid":"1361900791173-11855-8017","paramvalue":"<NULL>"}]}],"script":"actions.selenium.test.run","project":projectName,"_id":ObjectId("5143af6bbbdf99f432000007")});

automationframework.testcases.save({"tag":[],"name":"Find PrimaTest in Google","description":"","status":"To be Automated","_id":ObjectId("512c4bc5281b8c041a000010"),"collection":[{"order":"1","actionid":"512c4b3f281b8c041a00000e","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"URL","paramid":"1361857291996-19836-917","paramvalue":"www.google.com"},{"paramname":"Browser","paramid":"1361857319350-22783-32022","paramvalue":"${Browser}"}]},{"order":"2","actionid":"512c4b95281b8c041a00000f","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"search for","paramid":"1361857485948-2237-13684","paramvalue":"PrimaTest"}]}],"script":"","host":"","type":"collection","project":projectName});
automationframework.testcases.save({"tag":["amazon"],"name":"Add Star Trek to Cart","description":"","status":"Automated","_id":ObjectId("512cf7e4281b8c041a000046"),"collection":[{"order":"1","actionid":"512c4b3f281b8c041a00000e","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"URL","paramid":"1361857291996-19836-917","paramvalue":"www.amazon.com"},{"paramname":"Browser","paramid":"1361857319350-22783-32022","paramvalue":"${Browser}"}]},{"order":"2","actionid":"512cf672281b8c041a00003f","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"search for","paramid":"1361901171879-59-24985","paramvalue":"Star Trek Blu Ray"}]},{"order":"3","actionid":"512cf72b281b8c041a000043","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[{"paramname":"Item Index","paramid":"1361902537334-29436-6570","paramvalue":"0"}]},{"order":"4","actionid":"512cf76f281b8c041a000044","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[]},{"order":"5","actionid":"512cf7a3281b8c041a000045","host":"Default","executionflow":"Record Error Stop Test Case","returnvalue":"","parameters":[]}],"script":"","host":"","type":"collection","project":projectName});

automationframework.testsets.save({"name":"Google Search","testcases":[{"_id":"512c4bc5281b8c041a000010"}],"project":projectName,"_id":ObjectId("512c4bf6281b8c041a000011")});
automationframework.testsets.save({"name":"Amazon Shopping","testcases":[{"_id":"512cf7e4281b8c041a000046"}],"_id":ObjectId("512cf7fd281b8c041a000047"),"project":projectName});

automationframework.executions.save({"name":"Google Search","status":"Ready To Run","ignoreStatus":false,"testset":"512c4bf6281b8c041a000011","resultID":"","baseStateTCID":"","testsetname":"Google Search","tag":[],"variables":[{"name":"Browser","value":"Firefox","tag":[""],"possibleValues":["Internet Explorer","Firefox","Chrome"],"_id":"512c53ee281b8c041a00002b"}],"machines":[{"host":"dmitri-pc","vncport":"3006","port":"5009","tag":["qualification","aga","sadfasdf"],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382646780-24450-28606","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"5116ada4a5c8d4f00d000002"},{"host":"192.168.220.128","vncport":"3006","port":"5009","tag":[""],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382646780-22669-30141","result":"","description":"host name is:SilkDevSQLVS2","roles":["Default"],"_id":"5117db04898578bc2f000001"},{"host":"192.168.8.1","vncport":"3006","port":"5009","tag":"","state":"","baseState":"","resultID":"","baseStateTCID":"1370382646780-474-22129","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"514798379c05dd140f000002"}],"_id":"1370382646773-21025-16604","project":projectName});
automationframework.executions.save({"name":"Amazon Shopping","status":"Ready To Run","ignoreStatus":false,"testset":"512cf7fd281b8c041a000047","resultID":"","baseStateTCID":"","testsetname":"Amazon Shopping","tag":[],"variables":[{"name":"Browser","value":"Firefox","tag":[""],"possibleValues":["Internet Explorer","Firefox","Chrome"],"_id":"512c53ee281b8c041a00002b"}],"machines":[{"host":"dmitri-pc","vncport":"3006","port":"5009","tag":["qualification","aga","sadfasdf"],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382670808-29606-27201","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"5116ada4a5c8d4f00d000002"},{"host":"192.168.220.128","vncport":"3006","port":"5009","tag":[""],"state":"","baseState":"","resultID":"","baseStateTCID":"1370382670808-3320-9747","result":"","description":"host name is:SilkDevSQLVS2","roles":["Default"],"_id":"5117db04898578bc2f000001"},{"host":"192.168.8.1","vncport":"3006","port":"5009","tag":"","state":"","baseState":"","resultID":"","baseStateTCID":"1370382670808-10943-29261","result":"","description":"host name is:Dmitri-PC","roles":["Default"],"_id":"514798379c05dd140f000002"}],"_id":"1370382670801-26323-8371","project":projectName});

automationframework.variables.save({"tag":[""],"name":"Browser","value":"<NULL>","taskVar":true,"possibleValues":["Internet Explorer","Firefox","Chrome"],"project":projectName,"_id":ObjectId("512c53ee281b8c041a00002b")});

automationframework.actionTags.save({"value":"selenium","project":projectName,"_id":ObjectId("512c4aed281b8c041a00000d")});
automationframework.actionTags.save({"value":"google","project":projectName,"_id":ObjectId("512c526f281b8c041a000027")});
automationframework.actionTags.save({"value":"amazon","project":projectName,"_id":ObjectId("512cf6be281b8c041a000040")});
automationframework.actionTags.save({"value":"search","project":projectName,"_id":ObjectId("512cf6be281b8c041a000042")});
automationframework.actionTags.save({"value":"cart","project":projectName,"_id":ObjectId("512cfb95281b8c041a00004f")});

automationframework.testcaseTags.save({"value":"amazon","project":projectName,"_id":ObjectId("5143aba1bbdf99f432000004")});

automationframework.executiontestcases.save({"name":"Find PrimaTest in Google","tag":[],"status":"Not Run","host":"","vncport":"","resultID":"","result":"","startdate":null,"enddate":null,"runtime":"","error":"","_id":"1370382648715-8910-10638","testcaseID":"512c4bc5281b8c041a000010","executionID":"1370382646773-21025-16604","project":projectName});
automationframework.executiontestcases.save({"name":"Add Star Trek to Cart","tag":["amazon"],"status":"Not Run","host":"","vncport":"","resultID":"","result":"","startdate":null,"enddate":null,"runtime":"","error":"","_id":"1370382677272-29684-24169","testcaseID":"512cf7e4281b8c041a000046","executionID":"1370382670801-26323-8371","project":projectName});