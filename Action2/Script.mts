 ''' The following script validates if users can log-in on AOB ''' 
AIUtil.SetContext Browser("creationtime:=0")

''' To validate if user has been moved successfully on the registration portal the script validates the bank logo present'''
AIUtil.FindTextBlock("dvantage Bank").CheckExists True
''' To  validate if  users can log in to their account with valid credentials ''' 
AIUtil.FindTextBlock("LOGIN").Click
AIUtil("text_box", "User Name").Type "defaultusername1234xyz"
AIUtil("text_box", "Password").Type "DefaultPasword@1234"
AIUtil("button", "", micFromTop, 1).Click
AIUtil.FindTextBlock("advantage Bank").CheckExists True

'LoadFunctionLibrary "C:\loginfunctionality.qfl"

