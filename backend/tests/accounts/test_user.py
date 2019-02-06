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
