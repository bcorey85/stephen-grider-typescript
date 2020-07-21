import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

const reader = new MatchReader('football.csv');
reader.read();

const summary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport()
);

const summary2 = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(reader.data);
summary2.buildAndPrintReport(reader.data);
