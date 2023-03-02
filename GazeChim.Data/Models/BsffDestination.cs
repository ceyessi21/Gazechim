using GazeChim.Data.Models.Enums;

namespace GazeChim.Data.Models
{
    public class BsffDestination : BsffCompany
    {
        public BsffOperationCode PlannedOperationCode { get; set; }
        public BsffReception Reception { get; set; }
        public string Cap { get; set; }
    }
}
