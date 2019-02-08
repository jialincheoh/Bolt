from app.accounts.user import UserManagement, User


def test_user_retrieve():
    # Arrange
    create_me = User("Awesome_ID", "A. Name")

    # Act
    UserManagement.create_user(create_me)

    user = UserManagement.get_user_by_id("Awesome_ID")

    # Assert
    assert user.user_id == "Awesome_ID"
    assert user.name == "A. Name"
def test_user_create():
   new_user = User("Test_create_id", "John Doe")
   UserManagement.create_user(new_user)
   recv_user = UserManagement.get_user_by_id("Test_create_id")
   assert recv_user.user_id == "Test_create_id"
   assert recv_user.name == "John Doe"
def test_user_delete():
    #previous test must have passed for this one to pass as well
    UserManagement.delete_user_by_id("Test_create_id")
    recv_user = UserManagement.get_user_by_id("Test_create_id")
    assert recv_user is None