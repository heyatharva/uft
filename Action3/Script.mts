''' To validate if user can successfully create new bank account on portal '''
AIUtil.SetContext Browser("creationtime:=0")
''' To validate if user can log-in in order to create bank account '''
AIUtil("text_box", "User Name").Type "defaultusername1234xyz"
AIUtil("text_box", "Password").Type "DefaultPasword@1234"
AIUtil("button", "", micFromTop, 1).Click
''' To validate if user is successfully logged in the script validates the home page ''' 
AIUtil.FindTextBlock("advantage Bank").CheckExists True

''' To validate if user can navigate to Accounts page in order to create new account '''
AIUtil.FindTextBlock("Accounts").CheckExists True

''' To validate if user is successfully navigated to accounts page and can see 'open new account' button in order to open a new account '''
AIUtil.FindTextBlock("My Accounts").CheckExists True
AIUtil.FindTextBlock("Accounts").Click
AIUtil("button", "OPEN NEW ACCOUNT").CheckExists True
AIUtil("button", "OPEN NEW ACCOUNT").Click
''' To validate if user can enter details on their own to create a new bank account '''
AIUtil("down_triangle", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("USD", micFromTop, 3).Click
AIUtil("down_triangle", micAnyText, micFromBottom, 1).Click
AIUtil.FindTextBlock("Savings Account").Click
AIUtil("text_box", "Name (for your own reference)").Type "Atharva Amrapurkar1"
AIUtil("button", "", micFromBottom, 1).Click

