const { GetTaskManager } = require("apiLayer");
const { z } = require("zod");

const TaskManagementMcpController = require("../../TaskManagementServiceMcpController");

class GetTaskMcpController extends TaskManagementMcpController {
  constructor(params) {
    super("getTask", "gettask", params);
    this.dataName = "task";
    this.crudType = "get";
  }

  createApiManager() {
    return new GetTaskManager(this.request, "mcp");
  }

  static getOutputSchema() {
    return z
      .object({
        status: z.string(),
        task: z
          .object({
            id: z
              .string()
              .uuid()
              .describe("The unique primary key of the data object as UUID"),
            title: z
              .string()
              .max(255)
              .describe(
                "The main description or name of the todo item. Required and must be non-empty.",
              ),
            hik: z.number().max(32767).min(-32768).describe("null"),
            djnshdffhiew: z.number().int().describe("null"),
            isActive: z
              .boolean()
              .describe(
                "The active status of the data object to manage soft delete. False when deleted.",
              ),
          })
          .describe(
            "A single todo task with a required title. Represents a minimal to-do item for a personal list.",
          ),
      })
      .describe("The response object of the crud route");
  }

  static getInputScheme() {
    return {
      accessToken: z
        .string()
        .optional()
        .describe(
          "The access token which is returned from a login request or given by user. This access token will override if there is any bearer or OAuth token in the mcp client. If not given the request will be made with the system (bearer or OAuth) token. For public routes you dont need to deifne any access token.",
        ),
      taskId: z
        .string()
        .uuid()
        .describe(
          "This id paremeter is used to query the required data object.",
        ),
    };
  }
}

module.exports = (headers) => {
  return {
    name: "getTask",
    description: "Retrieve details of a single todo task by its ID.",
    parameters: GetTaskMcpController.getInputScheme(),
    controller: async (mcpParams) => {
      console.log("Mcp Request Received", mcpParams);
      mcpParams.headers = headers;
      const controller = new GetTaskMcpController(mcpParams);
      try {
        const result = await controller.processRequest();
        //return GetTaskMcpController.getOutputSchema().parse(result);
        console.log("Mcp Response Ready", JSON.stringify(result));
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result),
            },
          ],
        };
      } catch (err) {
        console.log("Mcp Error Occured", err.message);
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: `Error: ${err.message}`,
            },
          ],
        };
      }
    },
  };
};
