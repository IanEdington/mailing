require_relative '../helpers/test_runner_utils'

class RemixTsApp < App
  include TestRunnerUtils

  def initialize(root_dir, *args)
    super('remix_ts', root_dir, *args)
  end

private
  def yarn_create!
    Dir.chdir(@root_dir) do
      system_quiet("yarn create remix . --template=remix --typescript --install")

      # yarn add peer dependencies
      system_quiet("yarn add next react react-dom")
    end
  end
end