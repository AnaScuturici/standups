require "test_helper"

class StandupsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @standup = standups(:one)
  end

  test "should get index" do
    get standups_url, as: :json
    assert_response :success
  end

  test "should create standup" do
    assert_difference("Standup.count") do
      post standups_url, params: { standup: { goal: @standup.goal, is_completed: @standup.is_completed, rating: @standup.rating } }, as: :json
    end

    assert_response :created
  end

  test "should show standup" do
    get standup_url(@standup), as: :json
    assert_response :success
  end

  test "should update standup" do
    patch standup_url(@standup), params: { standup: { goal: @standup.goal, is_completed: @standup.is_completed, rating: @standup.rating } }, as: :json
    assert_response :success
  end

  test "should destroy standup" do
    assert_difference("Standup.count", -1) do
      delete standup_url(@standup), as: :json
    end

    assert_response :no_content
  end
end
