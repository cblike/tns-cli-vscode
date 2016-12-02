'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let terminal:vscode.Terminal = vscode.window.createTerminal("tns");
    terminal.show(true);

    vscode.commands.registerCommand('tns.run_ios', () => {
        terminal.sendText("tns run ios");
    });

    vscode.commands.registerCommand('tns.run_android', () => {
        terminal.sendText("tns run android");
    });

    vscode.commands.registerCommand('tns.runEmulator_ios', () => {
        terminal.sendText("tns run ios --emulator");
    });

    vscode.commands.registerCommand('tns.runEmulator_android', () => {
        terminal.sendText("tns run android --emulator");
    });
    // platform
    vscode.commands.registerCommand('tns.platformlist', () => {
        terminal.sendText("tns platformlist");
    });

    vscode.commands.registerCommand('tns.addPlatform_ios', () => {
        terminal.sendText("tns platform add ios");
    });

    vscode.commands.registerCommand('tns.addPlatform_android', () => {
        terminal.sendText("tns platform add android");
    });

    vscode.commands.registerCommand('tns.removePlatform_ios', () => {
        terminal.sendText("tns platform remove ios");
    });

    vscode.commands.registerCommand('tns.removePlatform_android', () => {
        terminal.sendText("tns platform remove android");
    });

    vscode.commands.registerCommand('tns.updatePlatform_ios', () => {
        terminal.sendText("tns platform update ios");
    });

    vscode.commands.registerCommand('tns.updatePlatform_android', () => {
        terminal.sendText("tns platform update android");
    });

    //
    vscode.commands.registerCommand('tns.deployemntWatch_ios', () => {
        terminal.sendText("tns livesync ios --emulator --watch");
    });

    vscode.commands.registerCommand('tns.deploymentWatch_android', () => {
        terminal.sendText("tns livesync android --emulator --watch");
    });

    vscode.commands.registerCommand('tns.deployemnt_ios', () => {
        terminal.sendText("tns livesync ios --watch");
    });

    vscode.commands.registerCommand('tns.deployment_android', () => {
        terminal.sendText("tns livesync android --watch");
    });

    vscode.commands.registerCommand('tns.doctor', () => {
        terminal.sendText("tns doctor");
    });

    vscode.commands.registerCommand('tns.location', () => {
        terminal.sendText("tns location");
    });

    vscode.commands.registerCommand('tns.help', () => {
        terminal.sendText("tns help");
    });

    vscode.commands.registerCommand('tns.init', () => {
        terminal.sendText("tns init");
    });

    vscode.commands.registerCommand('tns.build_ios', () => {
        terminal.sendText("tns build ios");
    });

    vscode.commands.registerCommand('tns.build_android', () => {
        terminal.sendText("tns build android");
    });

    vscode.commands.registerCommand('tns.device', () => {
        terminal.sendText("tns device");
    });

    vscode.commands.registerCommand('tns.devicelists', () => {
        terminal.sendText("tns device lists");
    });

    vscode.commands.registerCommand('tns.devicelog', () => {
        terminal.sendText("tns device log");
    });

    vscode.commands.registerCommand('tns.devicerun', () => {
        terminal.sendText("tns device run");
    });

    vscode.commands.registerCommand('tns.devicelistapp', () => {
        terminal.sendText("tns device list-applications");
    });

   

    //context.subscriptions.push(loginDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}