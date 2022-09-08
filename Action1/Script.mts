 ''' The following script validates if users can register themselves on AOB ''' 
AIUtil.SetContext Browser("creationtime:=0")

''' To validate if user has been moved successfully on the registration portal the script validates the bank logo present'''
AIUtil.FindTextBlock("dvantage Bank").CheckExists True

''' To validate if users can click on 'registration' tab and register themselves with valid credentials '''
AIUtil.FindTextBlock("REGISTRATION").CheckExists True
AIUtil.FindTextBlock("REGISTRATION").Click
AIUtil("text_box", "First Name").Type "Default_name"
AIUtil("text_box", "Last Name").Type "Default_lastname"
AIUtil("text_box", "Email").Type "defaultname1xyz@gmail.com"
AIUtil("text_box", "User Name").Type "defaultusername1234xyz"
AIUtil("text_box", "Password").Type "DefaultPasword@1234"
AIUtil("text_box", "Confirm Password").Type "DefaultPasword@1234"
AIUtil("button", "", micFromTop, 1).CheckExists True ''' the script checks if the registration button is present or not'''
AIUtil("button", "4 Db").Click
''' To validate if user has been successfully logged in after registration the script vaidates home page of website 
AIUtil.FindTextBlock("advantage Bank").CheckExists True





