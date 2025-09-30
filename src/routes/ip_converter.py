from flask import Blueprint, request, jsonify
import ipaddress
import re

ip_converter_bp = Blueprint('ip_converter', __name__)

def validate_ip(ip_str):
    """Valida se a string é um endereço IP válido"""
    try:
        ipaddress.ip_address(ip_str)
        return True
    except ValueError:
        return False

def ip_to_decimal(ip_str):
    """Converte IP para decimal"""
    parts = ip_str.split('.')
    decimal = 0
    for i, part in enumerate(parts):
        decimal += int(part) * (256 ** (3 - i))
    return decimal

def ip_to_hex(ip_str):
    """Converte IP para hexadecimal"""
    parts = ip_str.split('.')
    hex_parts = [format(int(part), '02x') for part in parts]
    return '0x' + ''.join(hex_parts)

def ip_to_binary(ip_str):
    """Converte IP para binário"""
    parts = ip_str.split('.')
    binary_parts = [format(int(part), '08b') for part in parts]
    return '.'.join(binary_parts)

def ip_to_octal(ip_str):
    """Converte IP para octal"""
    parts = ip_str.split('.')
    octal_parts = [format(int(part), 'o') for part in parts]
    return '.'.join(octal_parts)

@ip_converter_bp.route('/convert', methods=['POST'])
def convert_ip():
    """Endpoint para converter IP em diferentes formatos"""
    try:
        data = request.get_json()
        
        if not data or 'ip' not in data:
            return jsonify({'error': 'IP address is required'}), 400
        
        ip_address = data['ip'].strip()
        
        if not validate_ip(ip_address):
            return jsonify({'error': 'Invalid IP address format'}), 400
        
        # Realizar as conversões
        result = {
            'original': ip_address,
            'decimal': ip_to_decimal(ip_address),
            'hexadecimal': ip_to_hex(ip_address),
            'binary': ip_to_binary(ip_address),
            'octal': ip_to_octal(ip_address)
        }
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@ip_converter_bp.route('/validate', methods=['POST'])
def validate_ip_endpoint():
    """Endpoint para validar IP"""
    try:
        data = request.get_json()
        
        if not data or 'ip' not in data:
            return jsonify({'error': 'IP address is required'}), 400
        
        ip_address = data['ip'].strip()
        is_valid = validate_ip(ip_address)
        
        return jsonify({'valid': is_valid})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

